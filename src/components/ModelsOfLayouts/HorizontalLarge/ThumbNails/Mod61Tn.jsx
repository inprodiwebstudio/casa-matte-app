import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod61Tn = () => {
	return (
		<Flex
			p={"10%"}
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing={"0.1em" }
				w="100%"
			>
				<div
					style={{
						width         : "100%",
						paddingLeft   : "10%",
						paddingRight  : "0%",
						maxHeight     : "100px",
						textTransform : "uppercase",
					}}
				>
					<TextShell.Title align="flex-end" />
				</div>
				<div
					style={{
						width         : "100%",
						paddingLeft   : "20%",
						textTransform : "uppercase",
						paddingRight  : "0px",
					}}
				>
					<TextShell.SubTitle align="flex-end" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod61Tn;
