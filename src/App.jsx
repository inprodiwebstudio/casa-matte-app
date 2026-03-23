/* eslint-disable import/no-extraneous-dependencies */
import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";
import { useEffect }     from "react";

//Mantine
import { MantineProvider }       from "@mantine/core";
import { ModalsProvider }        from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

import { CurrentConfigPhotoBookProvider } from "contexts/configContext";

import store, { persistor }     from "store";
import { theme }                from "./theme";
import { modals, modalsConfig } from "components/Modals";
import Router                   from "routes";
import "./Resources/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function App() {
	useEffect(() => {
		const handlePopState = (event) => {
			event.preventDefault();
			window.location.href = "https://casamatte.wip-inprodi.com/dashboard/";
		};

		window.addEventListener("popstate", handlePopState);

		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, []);

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
