import {Stack, Group}   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod54Tn = ({photos}) => {
	return (
		<Stack
			p="14%"
			pb="11%"
			pl="12%"
			pr="12%"
			w="100%"
			h="100%"
			spacing="0.1em"
		>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Stack
				w="100%"
				mah="10%"
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					w="100%"
					align="flex-end"
					h="fit-content"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.SubTitle align="flex-end" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod54Tn;
