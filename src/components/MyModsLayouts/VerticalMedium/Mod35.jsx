import { Center } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod35 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 28px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	return (
		<Center w="100%" h="100%">
			<div
				style={{
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					maxHeight      : "100px",
					overflow       : "hidden",
				}}
			>
				<div
					style={{
						width  : "70%",
						height : "fit-content",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						sheetNo={sheetNo}
						typeText="title"
						textShell={() => <TextShell.Title />}
						letterSpacing="4.8px"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</div>
		</Center>
	);
};

export default Mod35;
