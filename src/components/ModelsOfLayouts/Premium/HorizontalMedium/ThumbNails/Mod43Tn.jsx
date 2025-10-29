import {Stack, Flex }   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod43Tn = ({photos}) => {
	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
		>
			<Stack
				p="3%"
				pb="2%"
				w="70%"
				h="100%"
				align="flex-end"
				justify="flex-end"
			>
				<div
					style={{
						textTransform : "uppercase",
						width         : "100%",
					}}
				>
					<TextShell.SubTitle align="flex-end" />
				</div>
			</Stack>
			<Stack
				w="30%"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod43Tn;
