import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod29Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="50%"
					spacing={"0.1em"}
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Group>
				<Stack w="100%" h="50%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod29Tn;
