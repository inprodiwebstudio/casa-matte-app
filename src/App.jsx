/* eslint-disable import/no-extraneous-dependencies */
import { Provider }            from "react-redux";
import { BrowserRouter }       from "react-router-dom";
import { PersistGate }         from "redux-persist/integration/react";
import { useEffect, useState } from "react";

//Mantine
import { MantineProvider }       from "@mantine/core";
import { ModalsProvider }        from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

import { CurrentConfigPhotoBookProvider } from "contexts/configContext";

import store, { persistor }     from "store";
import { theme }                from "./theme";
import { modals, modalsConfig } from "components/Modals";
import Router                   from "routes";
import LogoCasaMatte            from "Resources/images/casaMatteLogo.png";
import "./Resources/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function App() {
	const [isCompatible, setIsCompatible] = useState(true);

	useEffect(() => {
		const checkCompatibility = () => {
			if (typeof window === "undefined") return;

			const width = window.innerWidth;

			setIsCompatible(width >= 1030);
		};

		checkCompatibility();

		window.addEventListener("resize", checkCompatibility);

		const handlePopState = (event) => {
			event.preventDefault();
			window.location.href = "https://casamatte.com/dashboard/";
		};

		window.addEventListener("popstate", handlePopState);

		return () => {
			window.removeEventListener("resize", checkCompatibility);
			window.removeEventListener("popstate", handlePopState);
		};
	}, []);

	if (!isCompatible) {
		return (
			<div id="body-app">
				<div className="container-mobile-info">
					<div className="text-group-mobile">
						<div className="mobile-notification">
							La aplicación para editar no es compatible con dispositivos móviles.
							Te recomendamos que uses una computadora.
						</div>
						<div className="mobile-logo-header">
							<div className="att-text-container">ATTE.</div>
							<img src={LogoCasaMatte} width={170} alt="CasaMatte Logo" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="body-app">
			<Provider store={store}>
				<CurrentConfigPhotoBookProvider>
					<BrowserRouter>
						<PersistGate persistor={persistor}>
							<MantineProvider theme={theme}>
								<ModalsProvider modals={modals} modalProps={modalsConfig}>
									<NotificationsProvider position="top-right" zIndex={99999}>
										<Router />
									</NotificationsProvider>
								</ModalsProvider>
							</MantineProvider>
						</PersistGate>
					</BrowserRouter>
				</CurrentConfigPhotoBookProvider>
			</Provider>
		</div>
	);
}
