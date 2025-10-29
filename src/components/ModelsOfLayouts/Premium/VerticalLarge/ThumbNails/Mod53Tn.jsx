import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod53Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pb="10%"
			spacing={"0.3em"}
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
			<Stack
				p="0%"
				m="0%"
				w="90%"
				justify="flex-end"
				align="flex-end"
				spacing={"0.1em"}
			>
				<TextShell.Title width="40%" align="flex-end" />
				<TextShell.SubTitle width="20%" align="flex-end" />
			</Stack>
		</Stack>
	);
};

export default Mod53Tn;
