import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";


const Mod52 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify="center"
			direction="column"
		>
			<Stack
				spacing="5%"
				w="70%"
				h="55%"
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
		</Flex>
	);
};

export default Mod52;
