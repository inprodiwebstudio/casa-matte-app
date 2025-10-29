import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod75Tn = ({photos}) => {
	return (
		<Stack
			p="13%"
			pb="10%"
			pl="30%"
			pr="30%"
			w="100%"
			h="100%"
			spacing={"0.1em"}
		>
			<Stack
				w="100%"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
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

export default Mod75Tn;
