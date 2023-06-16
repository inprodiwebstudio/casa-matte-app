/* eslint-disable import/no-extraneous-dependencies */
import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";

//Mantine
import { MantineProvider }       from "@mantine/core";
import { ModalsProvider }        from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";


import store, { persistor }     from "store";
import { modals, modalsConfig } from "components/Modals";
import Router                   from "routes";
import "./Resources/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";


export default function App() {
	return (
		<div id="body-app">
			<Provider store={store}>
				<BrowserRouter>
					<PersistGate persistor={persistor}>
						<MantineProvider withNormalizeCSS withGlobalStyles>
							<ModalsProvider
								modals={ modals }
								modalProps={ modalsConfig }
							>
								<NotificationsProvider position="top-right" zIndex={99999}>
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
