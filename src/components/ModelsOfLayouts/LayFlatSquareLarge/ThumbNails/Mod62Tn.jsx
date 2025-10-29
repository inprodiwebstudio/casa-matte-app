import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod62Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
		>
			<Stack
				spacing={"0.1em"}
				w="100%"
				h="100%"
			>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
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
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[4] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[5] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[6] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[7] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[8] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod62Tn;
