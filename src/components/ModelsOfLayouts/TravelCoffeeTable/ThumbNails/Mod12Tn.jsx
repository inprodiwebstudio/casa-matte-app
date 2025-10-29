import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
const Mod12Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			pl="27%"
			pr="27%"
		>
			<Stack w="100%" h="100%" spacing={"0.1em"}>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod12Tn;
