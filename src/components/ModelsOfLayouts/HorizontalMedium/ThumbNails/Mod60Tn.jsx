import {Stack, Group}   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod60Tn = ({photos}) => {
	return (
		<Stack
			p="10%"
			pb="8%"
			pl="11%"
			pr="11%"
			w="100%"
			h="100%"
			spacing="0.1em"
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

export default Mod60Tn;
