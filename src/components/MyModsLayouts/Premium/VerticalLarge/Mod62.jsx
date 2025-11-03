import {Stack, Flex, Group } from "@mantine/core";
import DividerLayout         from "components/LayoutHandler/DividerLayout";
import TextFix           from "components/LayoutHandler/TextFix";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
import Text                  from "components/LayoutHandler/Text";
import { textInsertion }     from "helpers";

//Own components


const Mod63 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "TITLE";

	const defaultText02 = "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper.";

	return (
		<Flex
			w="100%"
			h="100%"
			pt="21%"
			pb="21%"
			pl="5%"
			pr="5%"
			gap="0.1em"
			direction="column"
		>
			<Group
				w="100%"
				h="100%"
				spacing={0}
				position="apart"
			>
				<Stack w="45%" h="70%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					spacing="0.09em"
					w="45%"
					justify="center"
					h="50%"
					style={{overflow : "hidden"}}
				>
					<Stack
						spacing="0.09em"
					>
						<div>
							<TextFix
								align="left"
								type="h4"
								textNo={0}
								sheetNo={sheetNo}
								data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
							/>
						</div>
						<DividerLayout long="100%" position="h" />
					</Stack>
					<Stack
						h="80%"
					>
						<div
							style={{
								height : "100%",
							}}
						>
							<TextFix
								align="justify"
								type="regular"
								textNo={1}
								sheetNo={sheetNo}
								data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
							/>
						</div>
					</Stack>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod63;
