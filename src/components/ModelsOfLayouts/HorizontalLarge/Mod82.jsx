import {Stack, Group} from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";


const Mod82 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Stack
			p="22%"
			pb="19%"
			pl="12%"
			pr="12%"
			w="100%"
			h="100%"
			spacing={"20px"}
		>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Group>
			{listOfTexts.map((item, index) => {
				return (
					<Text
						key={index}
						sheetNo={sheetNo}
						letterSpacing={item?.letterSpacing}
						gapSpacing={item?.gapSpacing}
						lineHeight={item?.lineHeight}
						layoutNo={index}
					/>
				);
			})}
		</Stack>
	);
};

export default Mod82;
