import { Card, Center, Stack, Text } from "@mantine/core";
import FillCircle                    from "components/GalleryEditor/CradAction/FillCircle";
import { GoPlus }                    from "react-icons/go";
import { useDispatch }               from "react-redux";
import { gallerySlice }              from "store/Slices";

const NotAvailablePhotos = () => {
	const dispatch = useDispatch();
	const onClickAddPhotos = () => {
		dispatch(gallerySlice.actions.setTypeDropedView("photos"));
		dispatch(gallerySlice.actions.setTypeViewList("photos"));
	};
	return (
		<Card
			withBorder
			w="100%"
			radius="15px"
			p={15}
			pl={25}
			pr={25}
			style={{
				background : "#f6f6f6",
				flex       : 1,
			}}
		>
			<Stack
				w="100%"
				h="100%"
			>
				<Center
					style={{
						flex : 1,
					}}
				>
					<Card
						style={{
							background : "#e2e3e4",
							cursor     : "pointer",
							userSelect : "none",
						}}
						radius={"10px"}
						w="120px"
						onClick={() => onClickAddPhotos()}
					>
						<Center
							style={{
								flexDirection : "column",
								gap           : "5px",
							}}
						>
							<FillCircle>
								<GoPlus size={13} />
							</FillCircle>
							<Text
								size="10px"
								color="black"
								weight={500}
								align="center"
								style={{
									fontFamily    : "Helvetica",
									letterSpacing : "0px",
									color         : "black",
								}}
							>
								Agregar fotos
							</Text>
						</Center>
					</Card>
				</Center>
			</Stack>
		</Card>
	);
};

export default NotAvailablePhotos;
