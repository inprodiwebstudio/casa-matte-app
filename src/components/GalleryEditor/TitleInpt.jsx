import { Input }    from "@mantine/core";
import { MdEdit }   from "react-icons/md";
import { useState } from "react";

const TitleInpt = () => {
	const [title, setTitle] = useState(undefined);

	const onChangeTitle = (e) => {
		setTitle(e.target.value);
	};
	return (
		<Input
			value={title}
			variant="unstyled"
			placeholder="GALERÍA DE FOTOS SIN TÍTULO"
			onChange={onChangeTitle}
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
