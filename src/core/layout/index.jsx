import { Outlet } from "react-router-dom";

//Own components
import { AppShell } from "core/components";

export default function Layout() {
	return (
		<AppShell
			Body={Outlet}
		/>
	);
}
