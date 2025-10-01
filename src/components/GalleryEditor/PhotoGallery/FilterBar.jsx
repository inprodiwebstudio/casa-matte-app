import { Group, Select, Stack, Text } from "@mantine/core";
import { FaCaretDown }                from "react-icons/fa";

const FilterBar = () => {
	return (
		<Group
			spacing="50px"
		>
			<Stack
				w="25%"
			>
				<Select
					styles={{
						input : {
							background   : "#f6f6f6",
							borderColor  : "#e3e4e5",
							width        : "100%",
							height       : "20px",
							minHeight    : "2px",
							fontSize     : "10px",
							borderRadius : "10px",
							"&:focus"    : {
								borderColor : "#e3e4e5",
							},
						},
						dropdown : {
							paddingTop   : "0px !important",
							borderWidth  : 1,
							borderStyle  : "solid",
							borderRadius : 8,
							boxShadow    : "0 4px 10px rgba(0,0,0,0.1)",
						},
						item : {
							fontFamily        : "Helvetica !important",
							letterSpacing     : "0px",
							fontSize          : "10px",
							padding           : "0px",
							paddingLeft       : "10px",
							marginTop         : "4px",
							"&[data-hovered]" : {
								backgroundColor : "null !important",
								color           : "dark",
							},
							"&[data-selected]" : {
								color      : "white !important",
								background : "#868d96 !important",
							},
						},
					}}
					rightSection={<FaCaretDown size={10} />}
					data={[
						{ value : "react", label : "React" },
						{ value : "test", label : "test" },
					]}
				/>
			</Stack>
			<Text
				size="9px"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				Ocultar fotos usadas
			</Text>
			<Text
				size="9px"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					background    : "red",
				}}
			>
				Totalssss
			</Text>
		</Group>
	);
};

export default FilterBar;
