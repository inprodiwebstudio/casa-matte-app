import {Stack}          from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod44Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="20%"
			pr="20%"
			align="center"
			justify="center"
			spacing={"0.2em"}
		>
			<Stack
				w="100%"
				h="60%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="100%"
				style={{
					textTransform : "uppercase",
				}}
			>
				<TextShell.SubTitle align="center" />
			</Stack>
		</Stack>
	);
};

export default Mod44Tn;
