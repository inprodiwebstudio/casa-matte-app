import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";

//Mantine
import { MantineProvider } from "@mantine/core";
import { ModalsProvider }  from "@mantine/modals";

import store, { persistor }     from "store";
import { modals, modalsConfig } from "components/Modals";
import Router                   from "routes";
import "./Resources/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";


export default function App() {
	// const dataBrowser = window.navigator.userAgent;
	// console.log(dataBrowser.indexOf("Firefox"));

	// window.global||= window;

	return (
		<div id="body-app">
			<Provider store={store}>
				<BrowserRouter>
					<PersistGate persistor={persistor}>
						<MantineProvider>
							<ModalsProvider
								modals={ modals }
								modalProps={ modalsConfig }
							>
								<Router />
							</ModalsProvider>
						</MantineProvider>
					</PersistGate>
				</BrowserRouter>
			</Provider>
		</div>
	);
}
