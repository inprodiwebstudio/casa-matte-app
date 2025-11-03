import {Stack, Group} from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod83 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	return (
		<Stack
			p="13%"
			pb="10%"
			pl="11%"
			pr="11%"
			w="100%"
			h="100%"
			spacing="0.1em"
		>
			<Stack
				w={"100%"}
				h={"100%"}
				spacing={"0.1em"}
			>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
			<Stack
				w="100%"
				align="flex-end"
				mah="10%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "16px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="flex-end"
					sheetNo={sheetNo}
					textShell={() => <TextShell.SubTitle align="flex-end" />}
					data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod83;
