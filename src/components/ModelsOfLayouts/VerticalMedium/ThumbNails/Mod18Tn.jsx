import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod18Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.8%"
			pl="19%"
			pr="19%"
		>
			<Stack
				spacing="0.1em"xsxsx
				h="100%"
				w="100%"
			>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod18Tn;
