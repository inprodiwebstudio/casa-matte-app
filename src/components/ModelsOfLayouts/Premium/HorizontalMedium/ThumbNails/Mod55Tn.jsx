import {Stack, Group}   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod55Tn = ({photos}) => {
	return (
		<Stack
			p="18%"
			pb="16%"
			pl="10%"
			pr="10%"
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
				mah="12%"
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

export default Mod55Tn;
