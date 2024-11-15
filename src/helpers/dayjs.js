import "dayjs/locale/es-mx";
import dayjs        from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.locale("es-mx");
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

dayjs.updateLocale("es-mx", {
	months : "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
});

export default dayjs;
