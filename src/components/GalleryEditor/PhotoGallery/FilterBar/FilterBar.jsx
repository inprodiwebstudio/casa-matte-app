import { Group, Select, Stack } from "@mantine/core";
import { FaCaretDown }          from "react-icons/fa";
import HidePhotosCheck          from "./HidePhotosCheck";
import SelectorGrid             from "./SelectorGrid";

const FilterBar = () => {
	return (
		<Group
			spacing="28px"
			mt="12px"
		>
			<Stack
				w="30%"
			>
				<Select
					placeholder="Ordenar por"
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
						{ value : "filter 1", label : "filter 1" },
						{ value : "filter 2", label : "filter 2" },
					]}
				/>
			</Stack>
			<HidePhotosCheck />
			<Stack>
				<SelectorGrid />
			</Stack>
		</Group>
	);
};

export default FilterBar;
