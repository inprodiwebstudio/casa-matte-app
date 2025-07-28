import { Button, Center, Stack, Text } from "@mantine/core";
import { BlankPage }                   from "core/components";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";

const ChangeProject = ({ onConfirm }) => {
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
						mb="0px"
						sx={{
							letterSpacing : "4px",
						}}
					>
						CAMBIO DE PROYECTO
					</Text>
					<Stack
						spacing="2px"
						mt="0px"
						align="center"
						w="60%"
					>
						{/* <Text
							color="darkCasaMatte.7"
							weight={400}
							size="15px"
							sx={{
								textTransform : "uppercase",
							}}
						>
							{title}
						</Text> */}
						<Text
							align="center"
						>
							Hemos detectado que estás cambiando de proyecto. ¿Te gustaría guardar los últimos cambios realizados en el photobook antes de continuar?
						</Text>
					</Stack>
					<Button
						color="darkCasaMatte.7"
						size="xs"
						mt="20px"
						sx={{
							fontWeight : "200",
						}}
						onClick={() => onConfirm()}
					>
						CONFIRMAR
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

export default ChangeProject;
