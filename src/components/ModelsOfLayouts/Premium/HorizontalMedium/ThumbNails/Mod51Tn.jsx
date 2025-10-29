import {Stack }         from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod51Tn = ({photos}) => {
	return (
		<Stack
			pb="9%"
			w="100%"
			h="100%"
			spacing="0.10em"
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
				mah="10%"
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					w="100%"
					align="flex-end"
					h="fit-content"
					pr="5%"
				>
					<TextShell.SubTitle align="flex-end" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod51Tn;
