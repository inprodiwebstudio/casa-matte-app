import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";


const Mod50 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "auto";
		}
		if (isInPaginator) {
			return "auto";
		}
		if (isInWorkSpace) {
			return "50%";
		}
	};

	const defaultText01 = "";

	const defaultText02 = "Subtitulo 1";

	const defaultText03 = "Subtitulo 2";

	const defaultText04 = "Subtitulo 3";

	const defaultText05 = "Subtitulo 4";

	return (
		<Flex
			p="8%"
			pb="30%"
			pt="30%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			gap="0.35em"
			sx={{overflow : "hidden"}}
		>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.15em"
				aria-hidden
			>
				<Stack
					spacing="0.05em"
				>
					<div
						style={{width : "60%"}}
					>
						<Text
							align="left"
							type="h3"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.2em" position="h" />
				</Stack>
				<Stack
					spacing="0.1em"
				>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[2], defaultText03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[3], defaultText04, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[4], defaultText05, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
			</Stack>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Stack
					spacing="0.05em"
				>
					<div
						style={{width : "60%"}}
					>
						<Text
							align="left"
							type="h3"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[5], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.2em" position="h" />
				</Stack>
				<Stack
					spacing="0.1em"
				>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[6], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[7], defaultText03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[8], defaultText04, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<div>
						<Text
							align="left"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[9], defaultText05, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
			</Stack>
			{
				!isThumbNail && (
					<Stack
						w={handleWidthTextContainer()}
						mah="70%"
						spacing="0.2em"
						aria-hidden
					>
						<Stack
							spacing="0.05em"
						>
							<div
								style={{width : "60%"}}
							>
								<Text
									align="left"
									type="h3"
									sheetNo={sheetNo}
									data={textInsertion(data?.text[10], defaultText01, isInWorkSpace)}
									isInPaginator={isInPaginator}
									isThumbNail={isThumbNail}
								/>
							</div>
							<DividerLayout long="0.2em" position="h" />
						</Stack>
						<Stack
							spacing="0.1em"
						>
							<div>
								<Text
									align="left"
									type="h5"
									sheetNo={sheetNo}
									data={textInsertion(data?.text[11], defaultText02, isInWorkSpace)}
									isInPaginator={isInPaginator}
									isThumbNail={isThumbNail}
								/>
							</div>
							<div>
								<Text
									align="left"
									type="h5"
									sheetNo={sheetNo}
									data={textInsertion(data?.text[12], defaultText03, isInWorkSpace)}
									isInPaginator={isInPaginator}
									isThumbNail={isThumbNail}
								/>
							</div>
							<div>
								<Text
									align="left"
									type="h5"
									sheetNo={sheetNo}
									data={textInsertion(data?.text[13], defaultText04, isInWorkSpace)}
									isInPaginator={isInPaginator}
									isThumbNail={isThumbNail}
								/>
							</div>
							<div>
								<Text
									align="left"
									type="h5"
									sheetNo={sheetNo}
									data={textInsertion(data?.text[14], defaultText05, isInWorkSpace)}
									isInPaginator={isInPaginator}
									isThumbNail={isThumbNail}
								/>
							</div>
						</Stack>
					</Stack>
				)
			}
		</Flex>
	);
};

export default Mod50;
