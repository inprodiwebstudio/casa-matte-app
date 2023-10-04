import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";


const Mod45 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "38px";
		}
		if (isInPaginator) {
			return "99px";
		}
		if (isInWorkSpace) {
			return "40%";
		}
	};

	const defaultText01 = "";

	const defaultText02 = "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap="0.05em"
					justify="flex-start"
				>
					<Text
						align="left"
						type="h4"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<DividerLayout long="20%" position="h" />
				</Flex>
				<Flex justify="flex-start">
					<Text
						align="justify"
						type="regular"
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod45;
