import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod39Tn = ({photos}) => {
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
				<Stack h="70%" w="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Group
					h="30%"
					w="100%"
					spacing={"0.1em"}
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod39Tn;
