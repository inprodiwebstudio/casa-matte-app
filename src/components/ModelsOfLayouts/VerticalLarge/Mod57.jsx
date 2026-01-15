import {Stack, Flex, Group }             from "@mantine/core";
import ImgLayout                         from "components/LayoutHandler/ImgLayout";
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";
//Own components


const Mod57 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Flex
			p="3%"
			pt="10%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Group>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
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
		</Flex>
	);
};

export default Mod57;
