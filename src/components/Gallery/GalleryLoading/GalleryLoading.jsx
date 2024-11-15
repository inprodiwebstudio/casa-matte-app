import { BoxLoading } from "core/components";
import "./GalleryLoading.scss";

const GalleryLoading = () => {
	const arrayBox = new Array(10).fill(" ");

	return (
		<div className="GalleryLoading">
			{
				arrayBox.map((box, index) => (
					<BoxLoading key={index} width={144} height={144} />
				))
			}
		</div>
	);
};

export default GalleryLoading;
