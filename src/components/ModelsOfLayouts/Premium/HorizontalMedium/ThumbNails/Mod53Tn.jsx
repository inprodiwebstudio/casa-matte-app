import {Stack }         from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod53Tn = ({photos}) => {
	return (
		<Stack
			p="8%"
			pb="5%"
			pl="28%"
			pr="28%"
			w="100%"
			h="100%"
			spacing="0.1em"
		>
			<Stack
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
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
					align="center"
					h="fit-content"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.SubTitle align="center" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod53Tn;
