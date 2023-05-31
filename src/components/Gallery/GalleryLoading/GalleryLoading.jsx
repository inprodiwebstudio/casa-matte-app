import { BoxLoading } from "core/components";
import "./GalleryLoading.scss";

const GalleryLoading = () => {
	const arrayBox = new Array(6).fill(" ");

	return (
		<div className="GalleryLoading">
			{
				arrayBox.map((box, index) => (
					<BoxLoading key={index} width={157} height={157} />
				))
			}
		</div>
	);
};

export default GalleryLoading;
