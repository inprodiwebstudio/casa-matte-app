import {  Center, Flex, Stack } from "@mantine/core";
import { TextShell }            from "core/components";
//Own components

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
				<Stack spacing="0px" w="100%">
					<div
						style={{
							width          : "100%",
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
							overflow       : "visible",
							maxHeight      : "200px",
						}}
					>
						<div
							style={{
								width          : "100%",
								height         : "auto",
								display        : "flex",
								justifyContent : "center",
								alignItems     : "center",
							}}
						>
							<TextShell.Title />
						</div>
					</div>
					<div
						style={{
							width        : "100%",
							paddingLeft  : "20%",
							paddingRight : "20%",
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
