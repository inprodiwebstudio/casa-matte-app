import errorPages      from "core/constants/errorPages";
import ErrorPageLayout from "core/layout/errorPage/ErrorPageLayout.jsx";

const ErrorPage = ({codeError}) => {

	const errorsCodeData = {
		"404" : {
			...errorPages["404"],
			actionButton : {
				body   : "REGRESAR A LA PAGINA",
				action : () => window.location.replace("https://casamatte.com"),
			},
		},
		"500" : {
			...errorPages["500"],
		},
		"403" : {
			...errorPages["403"],
			actionButton : {
				body   : "REGRESAR A LA PAGINA",
				action : () => window.location.replace("https://casamatte.com"),
			},
		},
		"401" : {
			...errorPages["401"],
			actionButton : {
				body   : "REGRESAR A LA PAGINA",
				action : () => window.location.replace("https://casamatte.com"),
			},
		},
	};

	return (
		<>
			<ErrorPageLayout
				errorCode={errorsCodeData[codeError]?.code}
				title={errorsCodeData[codeError]?.title}
				description={errorsCodeData[codeError]?.message}
				actionButton={errorsCodeData[codeError]?.actionButton}
			/>
		</>
	);
};

export default ErrorPage;
