import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod14 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
			pl="20%"
			pr="20%"
			spacing={"0.1em"}
		>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={1}
					urlImage={data?.photos[1] ?? {}}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod14;
