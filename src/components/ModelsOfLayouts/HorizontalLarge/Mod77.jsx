import {Stack, Group} from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text                              from "components/LayoutHandler/Text";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";


const Mod77 = ({
	sheetNo,
}) => {

	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const listOfTexts = Object.values(currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts ?? {});

	return (
		<Stack
			p="14%"
			pb="12%"
			pl="12%"
			pr="12%"
			w="100%"
			h="100%"
			spacing={"25px"}
		>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
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
			</Group>
		</Stack>
	);
};

export default Mod77;
