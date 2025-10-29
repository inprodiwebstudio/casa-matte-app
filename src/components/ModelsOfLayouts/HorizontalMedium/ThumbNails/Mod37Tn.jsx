import {Stack, Flex, Center } from "@mantine/core";
import { TextShell }          from "core/components";

const Mod37Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Center w="100%" h="100%">
				<Stack
					spacing={"0.15em"}
					w="100%"
				>
					<div
						style={{
							width         : "100%",
							paddingLeft   : "10%",
							paddingRight  : "10%",
							maxHeight     : "100px",
							textTransform : "uppercase",
						}}
					>
						<TextShell.Title />
					</div>
					<div
						style={{
							width         : "100%",
							paddingLeft   : "20%",
							paddingRight  : "20%",
							textTransform : "uppercase",
						}}
					>
						<TextShell.SubTitle />
					</div>
				</Stack>
			</Center>
		</Flex>
	);
};

export default Mod37Tn;
