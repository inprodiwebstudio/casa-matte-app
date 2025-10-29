import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod82Tn = ({photos}) => {
	return (
		<Stack
			p="22%"
			pb="19%"
			pl="12%"
			pr="12%"
			w="100%"
			h="100%"
			spacing={"0.1em"}
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
				align="flex-end"
				mah="10%"
			>
				<TextShell.SubTitle align="flex-end" />
			</Stack>
		</Stack>
	);
};

export default Mod82Tn;
