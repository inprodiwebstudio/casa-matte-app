import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod70 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 3</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Et maecenas ante viverra potenti libero purus habitasse aliquam, non massa vivamus dictumst eu erat sodales cursus, integer lacinia rutrum urna aliquet convallis scelerisque. Volutpat condimentum quis taciti fames tempor sagittis eleifend nostra donec, proin ad dis nec sollicitudin dictum viverra semper ridiculus, potenti feugiat odio tellus nisl curabitur nunc phasellus. Luctus iaculis suscipit inceptos mollis quisque nam cum turpis cras, class ante risus ultricies dapibus justo suspendisse enim, cubilia feugiat sed est dui lacinia diam vivamus.</span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Curabitur quis eleifend tellus. Mauris venenatis accumsan magna, nec mattis ex molestie sit amet. Cras dignissim faucibus volutpat. Suspendisse egestas odio in libero imperdiet bibendum. Suspendisse eleifend dictum sagittis. Nam urna mi, vestibulum eget erat finibus, cursus vehicula elit. Donec imperdiet luctus tincidunt. Sed id vulputate felis. Donec sagittis feugiat ornare. Ut lacinia vehicula lacus non pretium.</span></p></span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Ut tempor convallis elit, eu placerat erat venenatis ac. Cras vitae pretium augue, eget facilisis sapien. Nulla facilisi. Aliquam erat volutpat. Quisque ut viverra neque. Nulla hendrerit nisl non fermentum dictum. Quisque iaculis cursus cursus. Vestibulum id commodo neque, ac posuere purus.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="55%"
				mah="90%"
				spacing={isInWorkSpace ? "25px" : "0.15em"}
				aria-hidden
				style={{overflow : "hidden"}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<div
					style={{
						textTransform : "uppercase",
					}}
				>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						letterSpacing="1.7px"
						align="left"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<Text
					sizes={{
						"chico"   : "13px",
						"regular" : "15px",
						"grande"  : "18px",
					}}
					align="justify"
					letterSpacing="0.5px"
					sheetNo={sheetNo}
					textShell={() => <TextShell.BodyParagraph align="flex-start" />}
					data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod70;
