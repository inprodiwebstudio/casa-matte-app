import {Stack, Group}   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod59Tn = ({photos}) => {
	return (
		<Stack
			p="22%"
			pb="18%"
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
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					w={"calc(33.33% - 0.067em)"}
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
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
				>
					<TextShell.SubTitle align="flex-end" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod59Tn;
