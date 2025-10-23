import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod42Tn = () => {
	return (
		<Flex
			pb="8%"
			pr="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			gap="0.09em"
		>
			<div
				style={{
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					marginRight    : "0px",
				}}
			>
				<DividerLayout
					long={"7%"}
					position="h"
					weight={"0.01em"}
				/>
			</div>
			<Stack spacing={"1px"} w="100%">
				<div
					style={{
						width : "100%",
					}}
				>
					<TextShell.Title width="40%" align="flex-end" />
				</div>
				<div
					style={{
						width        : "100%",
						paddingRight : "0px",
					}}
				>
					<TextShell.SubTitle width="20%" align="flex-end" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod42Tn;
