import {Stack, Flex }    from "@mantine/core";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
//Own components


const Mod64 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "TITLE";

	const defaultText02 = "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper.";

	return (
		<Flex
			w="100%"
			h="100%"
			p="0.05em"
			gap="0.05em"
		>
			<Stack
				w="50%"
				h="100%"
				spacing="0.05em"
				position="apart"
			>
				<Stack w="100%" h="50%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="50%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				w="50%"
				h="100%"
				spacing="0.05em"
				position="apart"
			>
				<Stack w="100%" h="60%" spacing="0.05em">
					<Stack
						spacing="0.05em"
						h="50%"
						pt="5%"
						pb="9%"
						pl="9%"
						pr="9%"
					>
						<Stack spacing="0.09em">
							<Text
								align="left"
								type="h4"
								data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
							/>
							<DividerLayout long="100%" position="h" />
						</Stack>
						<Stack style={{overflow : "hidden"}}>
							<Text
								align="justify"
								type="regular"
								data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
							/>
						</Stack>
					</Stack>
					<Stack h="65%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack w="100%" h="40%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod64;
