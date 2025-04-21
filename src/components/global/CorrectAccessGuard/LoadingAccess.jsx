import { Center, Stack, useMantineTheme } from "@mantine/core";
import { BlankPage }                      from "core/components";
import { ClipLoader }                     from "react-spinners";
import LogoCasaMatte                      from "Resources/images/casaMatteLogo.png";


const LoadingAccess = () => {
	const theme = useMantineTheme();
	return (
		<BlankPage
			backgroundColor={theme.colors.darkCasaMatte[1]}
		>
			<Center h="100%">
				<Stack
					align="center"
				>
					<ClipLoader
						color={theme.colors.darkCasaMatte[4]}
						size={50}
					/>
					<img src={LogoCasaMatte} width={190} />
				</Stack>
			</Center>
		</BlankPage>
	);
};

export default LoadingAccess;
