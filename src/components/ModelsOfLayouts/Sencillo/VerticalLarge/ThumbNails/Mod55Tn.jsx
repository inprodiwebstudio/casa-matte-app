import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod55Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pt="6%"
			justify="center"
			align="center"
			spacing={"0.2em"}
		>
			<TextShell.SubTitle width="20%" align="center" />
			<Stack
				w="100%"
				h="100%"
				spacing={"0.1em"}
			>
				<Stack
					w="100%"
					h="calc(100% / 2 - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Stack
						p="0%"
						h="100%"
						w="calc(100% / 2 - 0.05em)"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						p="0%"
						h="100%"
						w="calc(100% / 2 - 0.05em)"
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

export default Mod55Tn;
