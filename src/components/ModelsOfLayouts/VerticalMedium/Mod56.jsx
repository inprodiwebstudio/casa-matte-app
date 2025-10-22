import {Stack, Flex }                    from "@mantine/core";
import ImgLayout                         from "components/LayoutHandler/ImgLayout";
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";
//Own components


const Mod56 = ({
	sheetNo,
}) => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Flex
			p="8%"
			pt="15%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayout
					sheetNo={sheetNo}
					imageNo={0}
				/>
			</Stack>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayout
					sheetNo={sheetNo}
					imageNo={1}
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

export default Mod56;
