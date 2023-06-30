import { Flex, Stack } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod46 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "50px";
		}
		if (isInPaginator) {
			return "170px";
		}
		if (isInWorkSpace) {
			return "60%";
		}
	};
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.2em"
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<Flex
					direction="column"
					gap="0.05em"
					justify="flex-start"
				>
					<Text align="left" type="h4" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<DividerLayout long="20%" position="h" />
				</Flex>
				<Flex justify="flex-start">
					<Text
						align="justify"
						type="regular"
						data="
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.
                        <br>
                        <br>
                        Et maecenas ante viverra potenti libero purus habitasse aliquam, non massa vivamus dictumst eu erat sodales cursus, integer lacinia rutrum urna aliquet convallis scelerisque. Volutpat condimentum quis taciti fames tempor sagittis eleifend nostra donec, proin ad dis nec sollicitudin dictum viverra semper ridiculus, potenti feugiat odio tellus nisl curabitur nunc phasellus. Luctus iaculis suscipit inceptos mollis quisque nam cum turpis cras, class ante risus ultricies dapibus justo suspendisse enim, cubilia feugiat sed est dui lacinia diam vivamus.
                        <br>
                        <br>
                        Curabitur quis eleifend tellus. Mauris venenatis accumsan magna, nec mattis ex molestie sit amet. Cras dignissim faucibus volutpat. Suspendisse egestas odio in libero imperdiet bibendum. Suspendisse eleifend dictum sagittis. Nam urna mi, vestibulum eget erat finibus, cursus vehicula elit. Donec imperdiet luctus tincidunt. Sed id vulputate felis. Donec sagittis feugiat ornare. Ut lacinia vehicula lacus non pretium.
                        <br>
                        <br>
                        Ut tempor convallis elit, eu placerat erat venenatis ac. Cras vitae pretium augue, eget facilisis sapien. Nulla facilisi. Aliquam erat volutpat. Quisque ut viverra neque. Nulla hendrerit nisl non fermentum dictum. Quisque iaculis cursus cursus. Vestibulum id commodo neque, ac posuere purus. Quisque ornare dolor eu ex cursus vulputate. Mauris eget sapien in ligula blandit eleifend. Donec lobortis risus elementum metus facilisis, et interdum lectus auctor. Quisque congue dolor sollicitudin tempus sodales. Vestibulum egestas at augue sit amet luctus. Donec gravida molestie malesuada. Nulla luctus rhoncus lorem eu tempus.
                        "
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod46;
