import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod26Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="calc(50% - 0.05em)"
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
					w="calc(50% - 0.05em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod26Tn;
