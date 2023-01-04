//Own components
import "./LargeFormat.scss";
import layouts from "components/global/LayoutsPage/LargeFormat";

const LargeFormat = ({page1, page2}) => {
	const isSinglePage = ["Mod1", "Mod2", "Mod3"].includes(page1);

	const LayoutPage1 = layouts[page1];
	const LayoutPage2 = layouts[page2];

	return (
		<div className="LargeFormat">
			<div className="page-body">
				{
					!LayoutPage1 ? (
						<div />
					) : (
						<LayoutPage1 />
					)
				}
			</div>
			{
				!isSinglePage && (
					<div className="spacer" />
				)
			}
			{
				!isSinglePage && (
					<div className="page-body">
						{
							!LayoutPage2 ? (
								<div />
							) : (
								<LayoutPage2 />
							)
						}
					</div>
				)
			}
		</div>
	);
};

export default LargeFormat;
