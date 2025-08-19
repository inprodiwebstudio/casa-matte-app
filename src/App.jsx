/* eslint-disable import/no-extraneous-dependencies */
import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";

//Mantine
import { MantineProvider }       from "@mantine/core";
import { ModalsProvider }        from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";


import store, { persistor }     from "store";
import { theme }                from "./theme";
import { modals, modalsConfig } from "components/Modals";
import Router                   from "routes";
import LogoCasaMatte            from "Resources/images/casaMatteLogo.png";
import "./Resources/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";


export default function App() {
	const isMobile = /Android|iPad|iPod|BlackBerry|Opera Mini|Tablet|Kindle|Silk|PlayBook/i.test(
		navigator.userAgent
	);

	window.addEventListener("popstate", (event) => {
		event.preventDefault();
		window.location.href = "https://casamatte.com/dashboard/";
	});

	if (isMobile) {
		return (
			<div id="body-app">
				<div className="container-mobile-info">
					<div className="text-group-mobile">
						<div className="mobile-notification">
							La aplicación para editar no es compatible con dispositivos móviles.
							Te recomendamos que uses una computadora.
						</div>
						<div className="mobile-logo-header">
							<div className="att-text-container">ATTE.</div>
							<img src={LogoCasaMatte} width={170} />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div id="body-app">
				<Provider store={store}>
					<BrowserRouter>
						<PersistGate persistor={persistor}>
							<MantineProvider theme={theme}>
								<ModalsProvider
									modals={ modals }
									modalProps={ modalsConfig }
								>
									<NotificationsProvider
										position="top-right"
										zIndex={5}
									>
										<Router />
									</NotificationsProvider>
								</ModalsProvider>
							</MantineProvider>
						</PersistGate>
					</BrowserRouter>
				</Provider>
			</div>
		);
	}
}
