import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod63Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pr="25%"
		>
			<Stack
				h="100%"
				w="100%"
				sx={{
					position : "relative",
				}}
			>
				<Stack w="100%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Group
					w="40%"
					h="47%"
					sx={{
						position : "absolute",
						top      : "28%",
						left     : "87%",
					}}
					spacing={"0.1em"}
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod63Tn;
