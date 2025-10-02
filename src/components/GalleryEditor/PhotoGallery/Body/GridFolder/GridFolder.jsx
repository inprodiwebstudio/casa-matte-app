import { Center, Grid } from "@mantine/core";
import CardAction       from "components/GalleryEditor/CradAction";
import FolderCard       from "../FolderCard";
import { GoPlus }       from "react-icons/go";

const GridCard = () => {
	return (
		<Grid
			w="100%"
			gutter="3"
		>
			<Grid.Col
				span={6}
			>
				<Center
					w="100%"
					h="100%"
				>
					<CardAction
						withBorder
						label="Agregar carpeta nueva"
						h="120px"
						w="135px"
						icon={
							<GoPlus size={13} />
						}
					/>
				</Center>
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/25390327/pexels-photo-25390327.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/32005277/pexels-photo-32005277.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/32506092/pexels-photo-32506092.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/27054239/pexels-photo-27054239.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<FolderCard h="135px" />
			</Grid.Col>
		</Grid>
	);
};

export default GridCard;
