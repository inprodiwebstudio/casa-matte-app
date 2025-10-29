import { Stack }        from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod76Tn = ({photos}) => {
	return (
		<Stack
			p="8%"
			pb="6%"
			pl="23%"
			pr="23%"
			w="100%"
			h="100%"
			spacing={"0.1em"}
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
				align="center"
				mah="20%"
			>
				<TextShell.SubTitle align="center" />
			</Stack>
		</Stack>
	);
};

export default Mod76Tn;
