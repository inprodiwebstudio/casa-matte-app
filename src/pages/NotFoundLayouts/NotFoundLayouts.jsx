import { Center, Stack } from "@mantine/core";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";

import "./NotFoundLayouts.scss";

const NotFoundLayout = () => {
	return (
		<Center id="NotFoundLayouts">
			<Stack spacing={80} align="center">
				<Stack spacing={15} align="center">
					<div className="body-payment">
						Por el momento el formato o producto seleccionado no está disponible en nuestro editor. Estamos trabajando para integrarlo próximamente.
					</div>
				</Stack>
				<a href="https://casamatte.wip-inprodi.com/">
					<img src={LogoCasaMatte} width={180} />
				</a>
			</Stack>
		</Center>
	);
};

export default NotFoundLayout;
