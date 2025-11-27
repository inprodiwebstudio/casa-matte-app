import { Stack, Button }                          from "@mantine/core";
import { FaBook }                                 from "react-icons/fa";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import GhostFrontDom                              from "./GhostFrontDom";
import { snapShotCover }                          from "helpers";
import { useEffect }                              from "react";
import { workSpaceSlice }                         from "store/Slices";

const DownloadFront = () => {
	const dispatch = useDispatch();
	const bookConfigData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const frontTypeBook = useSelector((state) => state.workSpaceSlice.frontBookTypeView, shallowEqual);
	console.log(bookConfigData);


	const handlerDownloadFront = async () => {
		await snapShotCover("spanShotCover");
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView("whitOutImage"));
	};

	const generateFrontWhitOutImage = async () => {
		await snapShotCover("spanShotCover");
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView(null));
	};

	useEffect(() => {
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView("fullFrontBook"));
	}, []);

	useEffect(() => {
		if (frontTypeBook === "whitOutImage") {
			setTimeout(() => {
				generateFrontWhitOutImage();
			}, 2000);
		}
	}, [frontTypeBook]);

	return (
		<Stack
			spacing={0}
		>
			<GhostFrontDom />
			<Button
				color="gray"
				size="xs"
				mt={10}
				sx={{ fontWeight : "200" }}
				loading={false}
				rightIcon={<FaBook size="15px" />}
				onClick={() => handlerDownloadFront()}
				fullWidth
			>
				DESCARGAR PORTADA
			</Button>
		</Stack>
	);
};

export default DownloadFront;
