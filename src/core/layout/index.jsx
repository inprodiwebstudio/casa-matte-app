import { Outlet } from "react-router-dom";

//Own components
import { AppShell } from "core/components";
import Header       from "core/layout/dashboard/header";
import Navbar       from "./dashboard/navbar";
import Footer       from "./dashboard/footer";

export default function Layout() {
	return (
		<AppShell
			Body={Outlet}
			header={<Header />}
			navbar={<Navbar />}
			footer={<Footer />}
		/>
	);
}
