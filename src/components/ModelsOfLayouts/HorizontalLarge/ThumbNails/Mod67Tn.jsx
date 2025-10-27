import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod67Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			mt="3%"
			pl="16%"
			pr="16%"
			align="center"
			justify="center"
			spacing={"0.2em"}
		>
			<Stack
				w="100%"
				h="65%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="100%"
				h="10%"
				style={{
					textTransform : "uppercase",
				}}
			>
				<TextShell.SubTitle align="center" />
			</Stack>
		</Stack>
	);
};

export default Mod67Tn;
