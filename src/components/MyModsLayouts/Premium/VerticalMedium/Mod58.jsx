import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod58 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="34%"
			pb="34%"
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

export default Mod58;
