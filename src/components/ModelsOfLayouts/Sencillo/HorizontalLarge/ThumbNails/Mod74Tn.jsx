import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod74Tn = ({photos}) => {
	return (
		<Stack
			pb="12%"
			w="100%"
			h="100%"
			spacing={"0.2em"}
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
				pr="5%"
				pl="5%"
			>
				<TextShell.SubTitle align="flex-end" />
			</Stack>
		</Stack>
	);
};

export default Mod74Tn;
