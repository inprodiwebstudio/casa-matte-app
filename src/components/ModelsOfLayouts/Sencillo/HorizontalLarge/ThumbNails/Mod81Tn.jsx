import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod81Tn = ({photos}) => {
	return (
		<Stack
			p="12%"
			pb="10%"
			pl="10%"
			pr="10%"
			w="100%"
			h="100%"
			spacing={"0.1em"}
		>
			<Stack
				w="100%"
				align="flex-start"
				mah="10%"
			>
				<TextShell.SubTitle align="flex-start" />
			</Stack>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
					spacing={"0.1em"}
				>
					<Stack
						h={"calc(50% - 0.05em)"}
						w={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						h={"calc(50% - 0.05em)"}
						w={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod81Tn;
