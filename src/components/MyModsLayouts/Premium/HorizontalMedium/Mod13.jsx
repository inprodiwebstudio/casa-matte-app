import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod13 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="25%"
			pr="25%"
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

export default Mod13;
