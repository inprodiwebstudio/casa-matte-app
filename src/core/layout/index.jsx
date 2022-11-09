import { Outlet } from "react-router-dom";

//Own components
import { AppShell } from "core/components";
import Header       from "core/layout/dashboard/header";
import Navbar       from "./dashboard/navbar";

export default function Layout() {
	return (
		<AppShell
			Body={Outlet}
			header={<Header />}
			navbar={<Navbar />}
		/>
	);
}
