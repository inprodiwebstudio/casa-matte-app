import { Stack }      from "@mantine/core";
import { ClipLoader } from "react-spinners";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";

const LoadingWithLogo = () => {
	return (
		<Stack
			align="center"
		>
			<ClipLoader
				color={"#B2AFA6"}
				size={50}
			/>
			<img src={LogoCasaMatte} width={190} />
		</Stack>
	);
};

export default LoadingWithLogo;
