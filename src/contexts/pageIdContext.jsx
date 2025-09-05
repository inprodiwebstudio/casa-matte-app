import {createContext, useState} from "react";

export const pageIdContext = createContext();

export const PageIdProvider = ({pageId, isPaginatorBar, children}) => {

	const [myCurrentPageId] = useState(pageId ?? undefined);
	const [isInPaginatorBar] = useState(isPaginatorBar ?? false);

	return (
		<pageIdContext.Provider
			value={{
				myCurrentPageId,
				isInPaginatorBar,
			}}
		>
			{children}
		</pageIdContext.Provider>
	);
};
