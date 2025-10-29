import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod83Tn = ({photos}) => {
	return (
		<Stack
			p="13%"
			pb="10%"
			pl="11%"
			pr="11%"
			w="100%"
			h="100%"
			spacing={"0.1em"}
		>
			<Stack
				w={"100%"}
				h={"100%"}
				spacing={"0.1em"}
			>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack
						w={"calc(50% - 0.05em)"}
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
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

export default Mod83Tn;
