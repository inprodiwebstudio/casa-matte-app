import {Stack, Group} from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod81 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	return (
		<Stack
			p="12%"
			pb="10%"
			pl="10%"
			pr="10%"
			w="100%"
			h="100%"
			spacing={isInWorkSpace ? "0em" : "0.1em"}
		>
			<Stack
				w="100%"
				align="flex-start"
				mah="10%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "16px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="flex-start"
					sheetNo={sheetNo}
					textShell={() => <TextShell.SubTitle align="flex-start" />}
					data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
					spacing={"0.1em"}
				>
					<Stack
						h={"calc(50% - 0.05em)"}
						w={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack
						h={"calc(50% - 0.05em)"}
						w={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod81;
