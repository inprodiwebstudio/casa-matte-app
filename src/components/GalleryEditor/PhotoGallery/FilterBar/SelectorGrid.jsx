import { Group, Box } from "@mantine/core";

const SelectorGrid = () => {
	return (
		<Group
			spacing={"11px"}
			style={{
				cursor     : "pointer",
				userSelect : "none",
			}}
		>
			<Box
				w="12px"
				h="5px"
				style={{
					background : "#58595b",
				}}
			>
                &nbsp;
			</Box>
			<Box
				w="15px"
				h="10px"
				style={{
					background : "#58595b",
				}}
			>
                &nbsp;
			</Box>
		</Group>
	);
};

export default SelectorGrid;
