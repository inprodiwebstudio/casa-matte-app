import { Input }  from "@mantine/core";
import { MdEdit } from "react-icons/md";

const TitleInpt = () => {
	return (
		<Input
			value={"GALERÍA DE FOTOS SIN TÍTULO"}
			variant="unstyled"
			styles={{
				input : {
					fontWeight : 500,
					fontSize   : "15px",
					color      : "#1e293b",
				},
			}}
			rightSection={<MdEdit />}
		/>
	);
};

export default TitleInpt;
