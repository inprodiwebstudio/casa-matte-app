import {Stack, Flex }                    from "@mantine/core";
import Text                              from "components/LayoutHandler/Text";
import ImgLayout                         from "components/LayoutHandler/ImgLayout";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";
//Own components


const Mod51 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Flex
			p="22%"
			pl="4%"
			pr="4%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
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
		</Flex>
	);
};

export default Mod51;
