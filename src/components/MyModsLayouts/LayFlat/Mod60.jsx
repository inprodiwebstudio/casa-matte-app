import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod60 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="4%"
			pb="4%"
		>
			<Stack
				w="100%"
				h="100%"
				spacing={"0.1em"}
			>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
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
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={5}
							urlImage={data?.photos[5] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={6}
							urlImage={data?.photos[6] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={7}
							urlImage={data?.photos[7] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={8}
							urlImage={data?.photos[8] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={9}
							urlImage={data?.photos[9] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={10}
							urlImage={data?.photos[10] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={11}
							urlImage={data?.photos[11] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={12}
							urlImage={data?.photos[12] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={13}
							urlImage={data?.photos[13] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={14}
							urlImage={data?.photos[14] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod60;
