import { Badge, Center, ScrollArea, Stack, Table, Text } from "@mantine/core";
import { isValidArray, dayjs }                           from "helpers";
import React                                             from "react";
import { ClipLoader }                                    from "react-spinners";


const TableOrders = ({
	isLoading,
	data,
	onSelectOrder,
}) => {
	return (
		<Stack
			sx={{
				flex : 1,
			}}
		>
			{
				isLoading && (
					<Center
						h="100%"
					>
						<ClipLoader />
					</Center>
				)
			}
			{
				(!isLoading && !isValidArray(data)) && (
					<Center
						h="100%"
					>
						<Text>NO SE ENCONTRARON ORDENES</Text>
					</Center>
				)
			}
			{
				(data && isValidArray(data) && !isLoading) && (
					<ScrollArea
						h="70vh"
					>
						<Table highlightOnHover striped>
							<thead>
								<tr>
									<th>
										<Text>NO DE PEDIDO</Text>
									</th>
									<th>
										<Text>NO DE PHOTOBOOK</Text>
									</th>
									<th>
										<Text>CORREO</Text>
									</th>
									<th>
										<Text>Fecha de Finalización</Text>
									</th>
									<th>
										<Text>STATUS</Text>
									</th>
								</tr>
							</thead>
							<tbody>
								{
									data.map((photoBook, index) => {
										return (
											<tr
												key={index}
												onClick={() => onSelectOrder(photoBook)}
											>
												<td>
													<Text>{!photoBook.id_del_pedido ? "--" : `#${photoBook.id_del_pedido}`}</Text>
												</td>
												<td>
													<Text>#{photoBook.post_id}</Text>
												</td>
												<td>
													<Text>{photoBook.correo_del_autor}</Text>
												</td>
												<td>
													<Text>{photoBook.fecha_de_termino ? dayjs(photoBook.fecha_de_termino).format("DD [de] MMMM, YYYY") : "--"}</Text>
												</td>
												<td>
													<Badge variant="light" color={(photoBook.status === "48") ? "green" : "orange"}>
														{photoBook.status === "48" ? "COMPLETADO" : "EDITANDO"}
													</Badge>
												</td>
											</tr>
										);
									})
								}
							</tbody>
						</Table>
					</ScrollArea>
				)
			}
		</Stack>
	);
};

export default TableOrders;
