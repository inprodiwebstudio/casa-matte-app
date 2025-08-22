import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
			pt="33%"
			pb="33%"
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

export default Mod10;
