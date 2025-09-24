import {Stack } from "@mantine/core";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";

const Mod36 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
		>
			{listOfTexts.map((item, index) => {
				return (
					<Text
						key={index}
						sheetNo={sheetNo}
						letterSpacing="6px"
						layoutNo={index}
					/>
				);
			})}
		</Stack>
	);
};

export default Mod36;
