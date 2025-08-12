import { useEffect, useState } from "react";

export const useAppVersionChecker = (interval = 30000) => {
	const [hasUpdate, setHasUpdate] = useState(false);
	const [currentVersion, setCurrentVersion] = useState(null);

	useEffect(() => {
		let versionCache = null;

		const checkVersion = async () => {
			try {
				const res = await fetch(`/version.json?ts=${Date.now()}`);
				const data = await res.json();

				if (!versionCache) {
					versionCache = data.version;
					setCurrentVersion(data.version);
				} else if (versionCache !== data.version) {
					setHasUpdate(true);
				}
			} catch (err) {
				console.error("Error verificando versión:", err);
			}
		};

		checkVersion();
		const id = setInterval(checkVersion, interval);
		return () => clearInterval(id);
	}, [interval]);

	return { hasUpdate, currentVersion };
};
