import { Center, useMantineTheme } from "@mantine/core";
import CardSearchPhotoBook         from "components/CardSearchPhotoBook";
import { BlankPage }               from "core/components";

const SearchPhotoBook = () => {
	const theme = useMantineTheme();
	return (
		<BlankPage
			backgroundColor={theme.colors.whiteCasaMatte[8]}
		>
			<Center
				h="100vh"
			>
				<CardSearchPhotoBook />
			</Center>
		</BlankPage>
	);
};

export default SearchPhotoBook;
