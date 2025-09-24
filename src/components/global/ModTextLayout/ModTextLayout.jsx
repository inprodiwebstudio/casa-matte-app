import {Stack } from "@mantine/core";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";

const ModTextLayout = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	const listOfDecorationLines = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.linesDecoration ?? {});

	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
		>
			{
				listOfDecorationLines.map((item, index) => {
					return (
						<></>
					);
				})
			}
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

export default ModTextLayout;
