import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod18 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="26.31%"
			pr="26.31%"
			spacing="0.5em"
		>
			<Stack w="29.73%" h="43.53%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack w="70.27%" h="56.47%">
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

export default Mod18;
