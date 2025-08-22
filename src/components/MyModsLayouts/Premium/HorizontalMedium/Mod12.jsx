import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod12 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="0%"
			spacing={"0.1em"}
		>
			<Stack
				w="calc(50% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="calc(50% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={1}
					urlImage={data?.photos[1] ?? {}}
				/>
			</Stack>
		</Group>
	);
};

export default Mod12;
