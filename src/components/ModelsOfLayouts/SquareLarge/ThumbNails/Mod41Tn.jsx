import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod41Tn = () => {
	return (
		<Flex
			pb="8%"
			pr="8%"
			pl="10%"
			w="100%"
			h="100%"
			align="flex-end"
		>
			<Stack
				spacing={"0.1em"}
				w="100%"
				align="flex-end"
			>
				<Flex
					w="100%"
					justify="flex-end"
					pr={"0px"}
				>
					<DividerLayout
						long="7%"
						weight={"0.015em"}
						position="h"
					/>
				</Flex>
				<Stack spacing={"0.1em"} w="100%">
					<TextShell.Title width="40%" align="flex-end" />
					<div
						style={{
							paddingRight : "0px",
						}}
					>
						<TextShell.SubTitle width="20%" align="flex-end" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod41Tn;
