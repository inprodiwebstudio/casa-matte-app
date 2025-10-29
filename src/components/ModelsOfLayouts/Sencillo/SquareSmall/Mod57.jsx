import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";


const Mod57 = ({
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
			gap="0.3em"
			direction="column"
		>
			<Stack
				spacing="0.3em"
				w="59%"
				h="60%"
				sx={{textTransform : "uppercase"}}
			>
				<Stack
					w="100%"
					h="100%"
					spacing={"0.2em"}
				>
					<Stack w="100%" h="100%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
				</Stack>
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

export default Mod57;
