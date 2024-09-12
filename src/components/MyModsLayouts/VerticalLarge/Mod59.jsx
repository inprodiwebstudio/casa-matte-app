import {Stack, Flex, Group } from "@mantine/core";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
import Text                  from "components/LayoutHandler/Text";
import { textInsertion }     from "helpers";
//Own components


const Mod62 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper.";

	return (
		<Flex
			w="100%"
			h="100%"
			pt="19%"
			pb="19%"
			pl="15%"
			pr="15%"
			gap="0.1em"
			direction="column"
		>
			<Stack w="100%" h="70%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Group
				w="100%"
				h="30%"
				spacing={0}
				position="apart"
			>
				<Stack w="48.5%" h="100%">
					<Text
						align="justify"
						type="regular"
						textNo={0}
						sheetNo={sheetNo}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Stack>
				<Stack w="48.5%" h="100%">
					<Text
						align="justify"
						type="regular"
						textNo={1}
						sheetNo={sheetNo}
						data={textInsertion(data?.text[1], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod62;
