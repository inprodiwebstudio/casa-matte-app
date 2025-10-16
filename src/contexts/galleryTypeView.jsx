import {createContext, useState} from "react";

export const galleryTypeViewContext = createContext();

export const GalleryTypeView = ({children}) => {

	const [gridType, setGridType] = useState("photos");

	return (
		<galleryTypeViewContext.Provider
			value={{
				gridType,
				setGridType,
			}}
		>
			{children}
		</galleryTypeViewContext.Provider>
	);
};
