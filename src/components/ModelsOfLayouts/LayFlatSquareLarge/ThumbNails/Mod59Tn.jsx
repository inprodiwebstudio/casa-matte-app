import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod59Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pt="10%"
			pb="10%"
		>
			<Stack
				w="100%"
				h="100%"
				spacing={"0.1em"}
			>
				<Flex
					gap="0.1em"
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[4] ?? {}}
						/>
					</Stack>
				</Flex>
				<Flex
					gap="0.1em"
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[5] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[6] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[7] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[8] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[9] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod59Tn;
