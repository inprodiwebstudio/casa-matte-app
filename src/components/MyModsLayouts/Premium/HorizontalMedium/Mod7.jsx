import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod7 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
			pl="32%"
			pr="32%"
		>
			<ImgLayout
				isInWorkSpace={isInWorkSpace}
				sheetNo={sheetNo}
				imageNo={0}
				urlImage={data?.photos[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod7;
