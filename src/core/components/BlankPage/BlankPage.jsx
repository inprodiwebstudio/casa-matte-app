import { Box } from "@mantine/core";
import "./BlankPage.scss";
const BlankPage = ({children, backgroundColor}) => {
	return (
		<Box
			w="100vw"
			h="100vh"
			className="BlankPageBody"
			sx={{
				background : backgroundColor ? `${backgroundColor} !important` : undefined,
			}}
		>
			{children}
		</Box>
	);
};

export default BlankPage;
