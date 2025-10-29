import {Stack, Group}   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod56Tn = ({photos}) => {
	return (
		<Stack
			p="22%"
			pb="18%"
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
					w="calc(30% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(70% - 0.05em)"
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
					h="'fit-content"
				>
					<TextShell.SubTitle align="flex-end" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod56Tn;
