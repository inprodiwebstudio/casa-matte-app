import {Stack}   from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";


const Mod35 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Stack
			p="4%"
			pt="23%"
			pb="23%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			spacing={"20px"}
		>
			<Stack w="100%" h="100%">
				<ImgLayout
					sheetNo={sheetNo}
					imageNo={0}
				/>
			</Stack>
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

export default Mod35;
