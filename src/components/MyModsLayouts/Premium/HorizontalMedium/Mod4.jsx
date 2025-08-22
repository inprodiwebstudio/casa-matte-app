import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod4 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="25%"
			pr="25%"
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

export default Mod4;
