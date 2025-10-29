import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod66Tn = ({photos}) => {
	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
		>
			<Stack
				w="30%"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				p={"5%"}
				pr={"5%"}
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
		</Flex>
	);
};

export default Mod66Tn;
