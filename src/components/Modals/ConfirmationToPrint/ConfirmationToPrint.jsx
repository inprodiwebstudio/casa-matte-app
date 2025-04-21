import { useState }                  from "react";
import BodyConfirm                   from "./BodyConfirm";
import IncompletedPagesBody          from "./IncompletedPagesBody";
import { shallowEqual, useSelector } from "react-redux";
import { isValidArray }              from "helpers";
import { inCompletePages }           from "./ConfirmationToPrint.helpers";
import "./ConfirmationPrint.scss";


const ConfirmationToPrint = () => {
	const pages = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const [notCompletedPages, setNotCompletedPages] = useState([]);

	const handlerSubmit = () => {
		setNotCompletedPages(inCompletePages(Object.values(pages)));
	};

	return (
		<>
			{
				!isValidArray(notCompletedPages) ? <BodyConfirm onSubmit={handlerSubmit} /> : <IncompletedPagesBody pages={notCompletedPages} />
			}
		</>
	);
};

export default ConfirmationToPrint;
