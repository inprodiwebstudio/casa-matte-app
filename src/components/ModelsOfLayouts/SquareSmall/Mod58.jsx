import {Stack, Flex }                    from "@mantine/core";
import ImgLayout                         from "components/LayoutHandler/ImgLayout";
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";
//Own components


const Mod58 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Flex
			pb="25%"
			w="100%"
			h="100%"
			direction="column"
		>
			<Stack
				spacing="0.5em"
				w="100%"
				h="100%"
				align="flex-end"
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

export default Mod58;
