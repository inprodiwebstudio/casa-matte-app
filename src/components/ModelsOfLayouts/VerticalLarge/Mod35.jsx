import { Center, Stack } from "@mantine/core";

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
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
			>
				{listOfTexts.map((item, index) => {
					return (
						<Text
							key={index}
							sheetNo={sheetNo}
							letterSpacing="6.5px"
							layoutNo={index}
						/>
					);
				})}
			</Stack>
		</Center>
	);
};

export default Mod35;
