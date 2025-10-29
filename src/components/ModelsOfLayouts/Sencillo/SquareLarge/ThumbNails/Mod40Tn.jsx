import { Center, Flex, Stack } from "@mantine/core";
import { TextShell }           from "core/components";
//Own components

const Mod40Tn = () => {
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
					spacing={"0.05em"}
					w="100%"
				>
					<div
						style={{
							width        : "100%",
							paddingLeft  : "10%",
							paddingRight : "10%",
							maxHeight    : "100px",
						}}
					>
						<TextShell.Title />
					</div>
					<div
						style={{
							width        : "100%",
							paddingLeft  : "20%",
							paddingRight : "20%",
						}}>
						<TextShell.SubTitle />
					</div>
				</Stack>
			</Center>
		</Flex>
	);
};

export default Mod40Tn;
