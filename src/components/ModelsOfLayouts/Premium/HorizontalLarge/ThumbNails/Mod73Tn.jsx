import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod73Tn = ({photos}) => {
	return (
		<Stack
			p="10%"
			pb="7%"
			w="100%"
			h="100%"
			spacing="0.1em"
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
				mah="20%"
			>
				<TextShell.SubTitle align="flex-end" />
			</Stack>
		</Stack>
	);
};

export default Mod73Tn;
