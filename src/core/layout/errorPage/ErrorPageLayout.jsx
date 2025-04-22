import { Button, Center, Stack, Text } from "@mantine/core";
import { BlankPage }                   from "core/components";
import { useNavigate }                 from "react-router";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";

const ErrorPageLayout = ({
	errorCode,
	title,
	description,
	actionButton,
}) => {
	const navigate = useNavigate();


	const defaultActionButton = {
		body   : actionButton?.body ?? "RECARGAR PAGINA",
		action : () => actionButton?.action ?? navigate(-1),
	};

	return (
		<BlankPage>
			<Center
				h="100%"
			>
				<Stack
					spacing="10px"
					align="center"
					justify="center"
				>
					<Text
						color="darkCasaMatte.7"
						weight={400}
						size="15px"
						mb="10px"
						sx={{
							letterSpacing : "4px",
						}}
					>
						ERROR
					</Text>
					<Text
						color="darkCasaMatte.6"
						weight={800}
						sx={{
							fontSize   : "150px",
							lineHeight : "100px",
						}}
					>
						{errorCode}
					</Text>
					<Stack
						spacing="2px"
						mt="35px"
						align="center"
					>
						<Text
							color="darkCasaMatte.7"
							weight={400}
							size="15px"
							sx={{
								textTransform : "uppercase",
							}}
						>
							{title}
						</Text>
						<Text
							align="center"
						>
							{description}
						</Text>
					</Stack>
					<Button
						color="darkCasaMatte.7"
						size="xs"
						mt="20px"
						sx={{
							fontWeight : "200",
						}}
						onClick={() => defaultActionButton.action()}
					>
						{defaultActionButton.body}
					</Button>
					<Stack
						mt="50px"
						align="center"
						spacing={0}
					>
						<img src={LogoCasaMatte} width={160} />
					</Stack>
				</Stack>
			</Center>
		</BlankPage>
	);
};

export default ErrorPageLayout;
