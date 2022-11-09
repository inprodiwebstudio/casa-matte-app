import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";

import store, { persistor } from "store";
import Router               from "routes";
import "./Resources/scss/index.scss";
import "./Resources/scss/style.scss";

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<Router />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	);
}
