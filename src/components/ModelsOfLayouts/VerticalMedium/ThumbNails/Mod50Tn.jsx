import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod50Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="18%"
			pb="18%"
			justify="center"
			align="center"
		>
			<Stack
				p="0%"
				m="0%"
				w="53%"
				h="100%"
				justify="center"
				align="center"
				spacing={"0.2em"}
			>
				<TextShell.Title width="70%" align="center" />
				<Stack
					p="0%"
					w="100%"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<TextShell.SubTitle width="70%" align="center" />
			</Stack>
		</Stack>
	);
};

export default Mod50Tn;
