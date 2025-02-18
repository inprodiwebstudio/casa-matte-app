import { useEffect, useState }                    from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//HookForm
import { useForm }                   from "react-hook-form";
import { workSpaceSlice, authSlice } from "store/Slices";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Own components
import { genericApi }                       from "store/api/genericApi";
import { LoginNotification, PostingConfig } from "Notifications";
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";
import { convertToObject, isValidArray }    from "helpers";
import axios                                from "axios";
// import { useNavigate }                      from "react-router";

const schema = Yup.object().shape({
	username : Yup.string().required("El campo es obligatorio"),
	password : Yup.string().required("El campo es obligatorio"),
});

const { useLazyGetDataQuery } = genericApi;

const jsonRegina = {
	"sizePhotoBook" : "mediano",
	"dimentions"    : "(21x27cm)",
	"product"       : "sencillo",
	"productName"   : "PHOTOBOOK SENCILLO",
	"format"        : "vertical",
	"frontPage"     : {
		"id"     : "FrontLayout",
		"sheet1" : {
			"layoutType" : "",
			"text"       : {},
			"photos"     : {
				"0" : {
					"id"  : "",
					"url" : "",
				},
			},
		},
	},
	"numberOfPages" : 182,
	"minPages"      : 10,
	"maxPages"      : 150,
	"currentPage"   : "page4",
	"basePrice"     : "3,438.00",
	"bound"         : "",
	"pasta"         : "",
	"maxRangePages" : 150,
	"pages"         : {
		"page1" : {
			"id"     : "page1",
			"sheet1" : {
				"pageNo"     : 1,
				"layoutType" : "",
				"photos"     : {
					"0" : {
						"id"  : "",
						"url" : "",
					},
				},
				"text" : {},
			},
			"sheet2" : {
				"pageNo"     : 2,
				"layoutType" : "Mod43",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>CHULO:</span></p>",
					"1" : "<p><span>Esta historia empezó el 6 de septiembre con una invitación inesperada a una conferencia de Anyen Rinpoche, un monje tibetano (foto en la siguiente página).</span></p><p> </p><p><span>Pasaste por mí (yo, con mi té de canela en la mano) y tu ... le diste un besito al coche de atrás y te robaste mi té.</span></p><p> </p><p><span>Los dos, sentados en el piso con nuestro cuaderno, escuchábamos y escribíamos. Te veía y me venían dos pensamientos:</span></p><p><span>- \"¡Qué loco! Estoy en un date con Javi, escuchando a un monje... ¡what!\"</span></p><p><span>- \"Creo que me va a encantar... ¡qué miedo!\"</span></p><p> </p><p><span>Mientras tanto, el monje decía:</span></p><p><span>- \"No actúen desde el miedo.\"</span></p><p><span>- \"Generen una vida significativa, no cotidiana.\"</span></p><p><span>- \"El mejor momento es ahora.\"</span></p><p> </p><p><span>Y me dije a mí misma:</span></p><p><span>\"Bueno... vamos a conocerlo, ábrete a lo desconocido, disfruta.\"</span></p><p> </p><p><span>Acto seguido, fuimos a cenar y nos hicieron salir corriendo del restaurante porque ya tenían que cerrar. Historias de aventuras y más aventuras... y yo pensaba: \"Es imposible tener tanto en común y pensar tan parecido... me encanta... pero ni lo pienses, vive en Santa Bárbara.\"</span></p>",
				},
			},
		},
		"page2" : {
			"id"     : "page2",
			"sheet1" : {
				"pageNo"     : 3,
				"layoutType" : "Mod26",
				"photos"     : {
					"0" : {
						"id"  : "",
						"url" : "",
					},
					"1" : {
						"id"  : "",
						"url" : "",
					},
					"2" : {
						"id"  : "",
						"url" : "",
					},
					"3" : {
						"id"  : "",
						"url" : "",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 4,
				"layoutType" : "",
				"photos"     : {
					"0" : {
						"id"  : "",
						"url" : "",
					},
				},
				"text" : {},
			},
		},
		"page3" : {
			"id"     : "page3",
			"sheet1" : {
				"pageNo"     : 5,
				"layoutType" : "Mod56",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/sept%2023/s19ajb78wxanqnevgm3p.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/wcgkgut0iwqbfu5hatyb.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>EL SALTO (NUEVO LEÓN)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 6,
				"layoutType" : "Mod16",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/xqnwphg5mmf7hcaaaofh.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/emjznfvutq0sk6sh7akp.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/nx0daksnltns9u5rm5nm.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page4" : {
			"id"     : "page4",
			"sheet1" : {
				"pageNo"     : 7,
				"layoutType" : "Mod17",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/xt0e7s2jxtpkf5nmxkj2.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ezhijudr0vk4moikv7ns.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/janqg0aswggrzfkckn1p.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 8,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/j7juntgnvqtntytw5nht.png?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/zsbfwnt77cxd7bllxves.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/fdqpib5tdjwbi1bvsj0b.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/r3zlxobvvwvjpcyuvajq.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/rqk3kffceedeljam7r9y.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page5" : {
			"id"     : "page5",
			"sheet1" : {
				"pageNo"     : 9,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/nw6we6b60f2u4iky34dq.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>BAHÍA MAGDALENA</span></p>",
					"1" : "<p><span>VIAJE DE MI CUMPLE #28 (DICIEMBRE 2023)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 10,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/gdxe3yvk09rf6t5zvev9.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/dshjholiq0oboo1sid1o.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page6" : {
			"id"     : "page6",
			"sheet1" : {
				"pageNo"     : 11,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>El 17 de Diciembre 2023 nadamos aproximadamente con 10 ballenas diferentes (de Aleta y Jorobadas), toneladas de jureles, dorados, marlins y focas. </span></p><p> </p><p><span>El cumpleaños más mágico que pude tener.</span></p><p> </p><p><span>Pusiste foquitos en nuestra casa de campaña para cantarme las mañanitas.</span></p><p> </p><p><span>Bonus: me cantaron con un pastel de brownie y oreos.</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 12,
				"layoutType" : "Mod18",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/lrxvpeptbihovhojv3au.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/yf4gtnpubkodyez0ztqb.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/xvkdny5i9bljgbxfoiwc.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page7" : {
			"id"     : "page7",
			"sheet1" : {
				"pageNo"     : 13,
				"layoutType" : "Mod6",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/d329l9rc14pyarrhbogz.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 14,
				"layoutType" : "Mod33",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/scxosulmmtw83vypcqni.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/rbxkgt2nss3pic477tuq.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/njxlx9svwebw8qlvneyf.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/v85moyldfvxi4xisxdj2.jpg?_a=BAMCg+Xw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/b4zkwrhjgj9ngee5otci.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page8" : {
			"id"     : "page8",
			"sheet1" : {
				"pageNo"     : 15,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/yny0eph0jrk2mz33ppoh.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/fbwi4yi2xihexbhlcuqu.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 16,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/rnoa5brrd5bfrh8dawtr.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/olzfevj9xcybrejhlk8j.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/vdxiwvvo2gqspj8sw2qn.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/vgt0fpkzozysdjje8adt.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page9" : {
			"id"     : "page9",
			"sheet1" : {
				"pageNo"     : 17,
				"layoutType" : "Mod14",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/q9wqj68cyhp7jwmasbp1.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/b3oabw8fmkf7xtvkkznx.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/dhdzqetkxzlefgchqfmn.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/zl3jjzrsqpj268ijfztf.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 18,
				"layoutType" : "Mod12",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/ub5394vwst3kigzc88ah.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/ixifvrxc0smyhnifca1l.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/magbay/i1rhw331c7pt8huvqx5m.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page10" : {
			"id"     : "page10",
			"sheet1" : {
				"pageNo"     : 19,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Dic%202023/oxkk9frwkkab5mnsiixe.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Dic%202023/qupeosvwkbzximqi1pwi.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Dic%202023/nuosxvha8uvpjfpx7kds.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Dic%202023/dubmgrtktd0fbyfa90fq.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/zxzf32dmsub3num6bwtb.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>CDMX</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 20,
				"layoutType" : "Mod52",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/vbvuugtkgpbvxi8ub6no.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>NOVIOS</span></p>",
					"1" : "<p><span>VALLE DE BRAVO</span></p><p><span>ENERO 2024</span></p>",
				},
			},
		},
		"page11" : {
			"id"     : "page11",
			"sheet1" : {
				"pageNo"     : 21,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>El capitán del velero me pregunto si queria ser su novia</span></p><p> </p><p><span>POR SUPUESTO QUE SÍ</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 22,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/zwlzdz12g1iiysz2hrix.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/jh0gnlkq2kctr73s8dm8.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page12" : {
			"id"     : "page12",
			"sheet1" : {
				"pageNo"     : 23,
				"layoutType" : "Mod33",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/wwsgl9xxxlvzz04xptcn.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/ucd3u2ediucgtmkmvi6f.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/ys7gczee2h2zrxnq3kir.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/uj8av2s5rznpkwdrxni2.jpg?_a=BAMCg+Xw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ENERO%2024/mmughay9s9cehdnqounu.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 24,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/fa2iqpbgofv9zpa0timd.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>SANTA BÁRBARA</span></p>",
					"1" : "<p><span>PRIMERA VISITA</span></p><p><span>FEBRERO</span></p>",
				},
			},
		},
		"page13" : {
			"id"     : "page13",
			"sheet1" : {
				"pageNo"     : 25,
				"layoutType" : "Mod55",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/gsqhrb4majf7ofc3mnty.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/seqsct3agjqx8gol70ul.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/nlvk02nf9fgmvamvn3sr.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>MALIBU CREEK</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 26,
				"layoutType" : "Mod26",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/hadsi7ojeaphuoqcccpq.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/mw0sltu0d5xhveskvadr.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/ckmgoinvnqzwihajqdp9.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/tscz7yvlkomiak0lbpm0.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page14" : {
			"id"     : "page14",
			"sheet1" : {
				"pageNo"     : 27,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/jrdl4ei4bjlds0wwnqhk.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/liurblnpcucvtafxcbsj.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 28,
				"layoutType" : "Mod55",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/myz6u8lmhkz5vipjvely.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ulbed66j5fxnn0pifmqq.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/lblyqftjzzqrhaom6ufo.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/bygfungvfy49yt7idxnf.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>UCSB</span></p>",
				},
			},
		},
		"page15" : {
			"id"     : "page15",
			"sheet1" : {
				"pageNo"     : 29,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/zhtrqxvyb1pqa77bxpse.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/esg23q3266bnpm7avgf5.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/ixaixn1rb0tbakjddn4o.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/ksysmrfxmxtrixatsmfi.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 30,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/ogwqpq5fgut2adtg8d5f.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page16" : {
			"id"     : "page16",
			"sheet1" : {
				"pageNo"     : 31,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/cikwogf8w4gvqmajpvet.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/ilpn43kasz1vt86a16dh.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/fd1h6sfvglc6xztzs68w.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/uq2txlos1we9xouttbqg.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/sf9az7xisgtczz2ixcs6.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 32,
				"layoutType" : "Mod34",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/wedr4bx32l8ngts0qezg.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/rn9qa42l9gcy4vhmr08x.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/xg12kfynpcpusu4bddsh.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/eyrg0witxlgwvgoozbsb.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/rccp1zdtccvu6t2r7eyn.jpg?_a=BAMCg+Xw0",
					},
					"4" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/jiwsl8m7vlgk4lxgokbi.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/v3urshueixcdcf0fntxu.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page17" : {
			"id"     : "page17",
			"sheet1" : {
				"pageNo"     : 33,
				"layoutType" : "Mod17",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/mxxt9f5mlpqn3ztoacs2.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/yy3kmsmpjlmlhaos2odv.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/yviqr33ohz0vo4ddqhyi.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/sjxylbmkfhs2jcgwjsz8.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20feb%2024/yn2wlvtpl75u1haz6rif.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 34,
				"layoutType" : "Mod56",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/fc7vdfte7sypkfswbshx.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/zpi6z2cqi22jbqi8ohct.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>BODA ISA Y ANDRÉS </span></p><p><span>VALLE - MARZO</span></p>",
				},
			},
		},
		"page18" : {
			"id"     : "page18",
			"sheet1" : {
				"pageNo"     : 35,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/exsdnux7xyjr3a38fnod.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/x8sevdpzrbyiusvoxn47.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/m7phmp7fu5ao7mp9x9jp.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/x0bmvychci2dxgvglegm.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 36,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/pi9ckezv8nvcnecpgcsw.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page19" : {
			"id"     : "page19",
			"sheet1" : {
				"pageNo"     : 37,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MUDANZA%20NL230/ab8ozfxcmghsgrmqvsgn.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MUDANZA%20NL230/cw3lr1xxtrdajjub57ki.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/h9mdmfdqrypl1syie0iu.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MUDANZA%20NL230/lpmlu7yoiiedj4pms5m0.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MUDANZA%20NL230/ymm6h4cnty0rddgtsmgp.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ceuqbfpyreizujgvjglf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>MUDANZA A NL 230</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 38,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Me mude sola por primera vez</span></p><p> </p><p><span>Acampamos en mi cuarto y desayunamos en el piso</span></p><p> </p><p><span>Gracias por acompañarme en estas locuras de la vida</span><br><br><span> </span></p><p> </p><p> </p><p> </p><p> </p><p><br><span>Te dije \"te amo\" por primera vez</span><br><br><br><span> </span></p><p> </p><p> </p><p> </p><p> </p><p> </p><p><span>Me regalaste:</span><br><span>Pan, para que nunca falte comida en mi casa.</span><br><span>Sal, para siempre darle sabor a la vida.</span><br><span>Vino, para que siempre celebremos</span><br><span>Dulce, para que esta nueva etapa sea dulce y placentera</span><br> </p>",
				},
			},
		},
		"page20" : {
			"id"     : "page20",
			"sheet1" : {
				"pageNo"     : 39,
				"layoutType" : "Mod56",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/tqe0cuu9gpzn73hqzdmt.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/lirs6p3qnt98xsx4ynlv.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>MALIBU CREEK</span></p><p><span>MARZO</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 40,
				"layoutType" : "Mod18",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/evkwwwiyklxvt2jl4ud0.png?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/bv0qwnjuvp8ideydkln6.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/sbw3vnc1gcsd4umuvpud.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page21" : {
			"id"     : "page21",
			"sheet1" : {
				"pageNo"     : 41,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Pol  te pregunto ¿Qué onda con tu Churri?</span><br><br><span>Y desde este día fue nuestro nuevo apodo.</span><br><br><span>(En partes de España a los novios se les dice CHURRI)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 42,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/ddepilvgs85rlglbyelz.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/h8h8g3ud9cdh1qc9e5a4.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/pexpcwrptbjeejil5cjv.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page22" : {
			"id"     : "page22",
			"sheet1" : {
				"pageNo"     : 43,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/hkmttts1m0n2erehnczj.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>SANTA BÁRBARA</span></p>",
					"1" : "<p><span>MARZO 2024</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 44,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/iwj1uheledai6br1cyoq.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/xftt26mfdlwd2ltyqqae.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page23" : {
			"id"     : "page23",
			"sheet1" : {
				"pageNo"     : 45,
				"layoutType" : "Mod1",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/o2ffutl9fnms3naxp694.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 46,
				"layoutType" : "Mod1",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/lcdmv90ulvibzgapkoz2.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page24" : {
			"id"     : "page24",
			"sheet1" : {
				"pageNo"     : 47,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>En Noviembre del año pasado, me mandaste una carta desde Buthan (me llego 4 meses después). Me emocione tanto cuando llego a casa de mi papá, que la lleve a Santa Barbara para leerla contigo.</span><br><br><br><span>Parte favorita:</span></p><p><span>\"The habit of listening to your environment and yourself is vital. Listen carefully and you will understand that your path of life will ask you to dance at a specific rythm .... Causing your soul, mind, body and heart to vibrate naturally and start tapping your feet into the purest sound of this world. THE CYCLE OF LIFE\".</span></p><p><span>                                                                - Javier Patrón (15/11/2023)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 48,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/j3adjjpkcsvbl4wc3etz.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MALIBU%20MARZO/fkhmtcyvsfj5ekly8oir.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/even20mhascvxckps6cf.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page25" : {
			"id"     : "page25",
			"sheet1" : {
				"pageNo"     : 49,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/oql3i6q89qvt6eodwlaq.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>SEQUOIAS</span></p>",
					"1" : "<p><span>California</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 50,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/bqlfcmxcxolychfytlan.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/e8xn1gtzrnttnkrxzqed.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page26" : {
			"id"     : "page26",
			"sheet1" : {
				"pageNo"     : 51,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/qz6hea38y78ywkap9mrq.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/tagadiiodyianlfxkxnf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>....</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 52,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Caminamos solos sin rumbo con nieve hasta las rodillas por horas.</span></p><p> </p><p> </p><p><span>Vivimos mucho amor por las Secoyas, entre las Secoyas y en las Secoyas</span></p>",
				},
			},
		},
		"page27" : {
			"id"     : "page27",
			"sheet1" : {
				"pageNo"     : 53,
				"layoutType" : "Mod20",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/cc4uh22e1ymqz94cpt1m.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/czb4izzkytaneouvcbps.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/qxwpj2xeb1pky9gfyurz.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 54,
				"layoutType" : "Mod12",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/zhorf0qh5twjhhcohpui.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/fevuu8gw9n9fgjkcamkd.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/rtximwij8xqje3u1tm8u.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page28" : {
			"id"     : "page28",
			"sheet1" : {
				"pageNo"     : 55,
				"layoutType" : "Mod6",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/qx3tfdg2yqxlfaks1f4i.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 56,
				"layoutType" : "Mod9",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/o3nsxo7pxbtvrycktsop.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/aqktudhad1tlult3elkh.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page29" : {
			"id"     : "page29",
			"sheet1" : {
				"pageNo"     : 57,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/kalirdqotej1isvqttef.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/i2yxzlfizblcafbdly14.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 58,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/ok1oyuhgpyxltoi9gzmg.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/iyumqjeapoxrgdtslddx.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/sqahdpixhpzxrajhzmjc.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ytg9gfupw1io3lgbsh1x.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page30" : {
			"id"     : "page30",
			"sheet1" : {
				"pageNo"     : 59,
				"layoutType" : "Mod1",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/Sequoia/dfmgiuorsqnlx5s2cor8.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 60,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/qbct9njb2kweepgwfo39.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/xf60ddbiqmuy3ydr92lc.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page31" : {
			"id"     : "page31",
			"sheet1" : {
				"pageNo"     : 61,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Dormimos en un Domo espectacular, con una vista inolvidable</span><br><br><span>Tomamos champaña y cenamos ramen</span><br><span> </span></p><p><span>Robamos naranjas enormes en la carretera</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 62,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/j1nkydhl1zjor1pkdncp.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/tzz7zdfietgo3b8lvtl7.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page32" : {
			"id"     : "page32",
			"sheet1" : {
				"pageNo"     : 63,
				"layoutType" : "Mod52",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/bodas%20abril/os4xls3aubsgma9dv3xm.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/fyzorkwqmxwowbqsdpmn.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>.....</span></p>",
					"1" : "<p><span>BODA PALOMA Y EL CHARAL</span></p><p> </p><p><span>LOS ENCINOS - ABRIL</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 64,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/bodas%20abril/vxa30xdcgq92an7kj6t5.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/bodas%20abril/mz3w3qzcyzcsyvggh9lo.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/bodas%20abril/eedjea7wliq3fgtpn6do.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/bodas%20abril/g4uu5m1z6faapm2yvp2i.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>BODA ANDREA Y BERNI</span></p><p><span>SAN MIGUEL DE ALLENDE</span></p>",
				},
			},
		},
		"page33" : {
			"id"     : "page33",
			"sheet1" : {
				"pageNo"     : 65,
				"layoutType" : "Mod56",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/ea5dwypur82zirlidhyd.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/yimploz3incgnkbe7lzj.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>SANTA BÁRBARA - MAYO</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 66,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Buceamos en los bosques de Macrocystis Pyrifera (AKA: Kelp). Es como estar en un bosque pero abajo del agua, muy loco.</span><br><br><span>El agua estaba congelada.</span><br><br><span>PS: Estabas muy emocionado, por que tu proyecto final de la maestría fue del Kelp.</span></p>",
				},
			},
		},
		"page34" : {
			"id"     : "page34",
			"sheet1" : {
				"pageNo"     : 67,
				"layoutType" : "Mod18",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/prcprpe7jyn2bqkpqt4x.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/kdud8nd8sxfcsrmmfgbq.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/ivi4y86nt99cnm1kehig.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 68,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/i13q7kyvashqjyndwzly.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/wbnjcdffnwgkffijnuzz.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SB%20ABRIL/nfjryqygxgcns6hhourf.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/adu2aviwxahfyrcgbgt5.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ti4tgbvwkldzec2lqear.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/dpvrvqbwgc3vx3jgkfpl.png?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page35" : {
			"id"     : "page35",
			"sheet1" : {
				"pageNo"     : 69,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/msikkndixdnk0vjwho7e.png?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 70,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/JUNIO%20CDMX/gyhjp21yicee2n9mocgm.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/JUNIO%20CDMX/pzivsv7lx2syr4swkjzu.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/JUNIO%20CDMX/u7gxeiao3bjypkli18og.jpg?_a=BAMCg+Xw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/JUNIO%20CDMX/stx2a36lojrlwflxghob.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>JUNIO CDMX</span></p>",
				},
			},
		},
		"page36" : {
			"id"     : "page36",
			"sheet1" : {
				"pageNo"     : 71,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/dgpumumohek9j5bdrwjx.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>ADOLF Y JODY</span></p>",
					"1" : "<p><span>VALLE DE BRAVO - JUNIO 2024</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 72,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/tejkqwrdjoeyc4uqlirt.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/af0vqleld2xao1vqzaaz.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/t6esrjsbwlbutkgmoalb.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page37" : {
			"id"     : "page37",
			"sheet1" : {
				"pageNo"     : 73,
				"layoutType" : "",
				"photos"     : {
					"0" : {
						"id"  : "",
						"url" : "",
					},
				},
				"text" : {},
			},
			"sheet2" : {
				"pageNo"     : 74,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/kuyhu5uh2apiadjtn1ym.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/mo3mertbwzbg252svql5.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page38" : {
			"id"     : "page38",
			"sheet1" : {
				"pageNo"     : 75,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/nojhoxfkw0zwqxz8ol1k.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/bgamofovnlwtg2eke163.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 76,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/nptog8nirt6v3rpwupvy.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page39" : {
			"id"     : "page39",
			"sheet1" : {
				"pageNo"     : 77,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/prd5gnhaqwpvjquxr4in.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/egp4i1bkzu6s8cy4nxe6.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 78,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/kun3klx2dikjl29slrvm.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/i8fxsmsvt1xja5hbrnkh.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/xvbkrwd7xagsc0cxanlu.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page40" : {
			"id"     : "page40",
			"sheet1" : {
				"pageNo"     : 79,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/qy8v3m5msndljlnlgxxf.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 80,
				"layoutType" : "Mod5",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ADOLF%20Y%20JODY/rolze9hvybq09owatle8.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page41" : {
			"id"     : "page41",
			"sheet1" : {
				"pageNo"     : 81,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%206%20MESES/bm9rnbkxsl3paygienmu.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>6 MESES</span></p>",
					"1" : "<p><span>CAMELINAS</span></p><p><span>Arponeamos y nadamos con una Manta Gigante</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 82,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%206%20MESES/qvssc0wat1iyqevusihu.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%206%20MESES/kgim2r3at0zytfnzudsn.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%206%20MESES/x8zrgwlnppj8wsqo89g2.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page42" : {
			"id"     : "page42",
			"sheet1" : {
				"pageNo"     : 83,
				"layoutType" : "Mod55",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CDMX%20JULIO/a51n0ryznjgpn8ibwrmb.jpg?_a=BAMCg+Xw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/xcerrxzfg3xkpsb80xlg.jpg?_a=BAMCg+Xw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CDMX%20JULIO/gjpht1tlr7huwjkpvvrr.jpg?_a=BAMCg+Xw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CDMX%20JULIO/ttjqbqnagxrwg884vp25.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>CDMX JULIO</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 84,
				"layoutType" : "Mod52",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/yczyrxxmfzp2v70pzqbb.jpg?_a=BAMCg+Xw0",
					},
				},
				"text" : {
					"0" : "<p><span>TU CUMPLE #31</span></p>",
					"1" : "<p><span>SANTA BARBARA AGOSTO</span></p>",
				},
			},
		},
		"page43" : {
			"id"     : "page43",
			"sheet1" : {
				"pageNo"     : 85,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/kdy9kv8xtqngfji7zeg5.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/nzan8npgnbrudorvj8xm.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 86,
				"layoutType" : "Mod6",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/qtzdyelmvoljv4vvb6v7.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page44" : {
			"id"     : "page44",
			"sheet1" : {
				"pageNo"     : 87,
				"layoutType" : "Mod12",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/p6mix81pgydo7s96bsnm.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/vg3ipwoas8gts1y2etme.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/j5guljxodss9j1cbbr12.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 88,
				"layoutType" : "Mod4",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/yiyftqgeb3vzq6uogigo.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page45" : {
			"id"     : "page45",
			"sheet1" : {
				"pageNo"     : 89,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Te desperté con croissants y velitas, meditamos y nos fuimos en bici a un lago abajo de un puente a empezar el día con un cold plunge.</span></p><p> </p><p><span>Acabamos el día en unas piedras viendo el atardecer. Nos quedamos horas tomando vino y platicando mientras veíamos el atardecer y las estrellas.</span><br><br><span>Estuvimos muy enamorados en las piedras :)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 90,
				"layoutType" : "Mod1",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/r6nh5haw4p0eykwa0kza.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page46" : {
			"id"     : "page46",
			"sheet1" : {
				"pageNo"     : 91,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/eubfpti4fue4pdkjsg34.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/gtxemrzy9vqalisximvm.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 92,
				"layoutType" : "Mod5",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/bckfy3izcawllo7qnubo.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page47" : {
			"id"     : "page47",
			"sheet1" : {
				"pageNo"     : 93,
				"layoutType" : "Mod5",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/v0ipsqyd9uo24x7o3gnb.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 94,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/chkf7ggdogmhfbuoeoxf.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/x1d1xdsp9gaqqywwa6zg.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page48" : {
			"id"     : "page48",
			"sheet1" : {
				"pageNo"     : 95,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/ovngeuu5wiquqsykvggo.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/mm8emxyjq3xdkjisruvj.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/epomjwydm4ixabdf1val.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 96,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/ptwfjeluhfiplpcmprnx.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page49" : {
			"id"     : "page49",
			"sheet1" : {
				"pageNo"     : 97,
				"layoutType" : "Mod5",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/ef7m10uh8bhbzrcx1zpz.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/epsrwzv82ln7mnv0wwvf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 98,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/TU%20CUMPLE%20SB%20AGO/b1wadbajgybvih7onuul.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page50" : {
			"id"     : "page50",
			"sheet1" : {
				"pageNo"     : 99,
				"layoutType" : "Mod55",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SEPR%2024%20LA/ejml3fhiw7fvhti01yox.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/yxvikfvle9iowlzpmsqw.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SEPR%2024%20LA/sbeykyu9k56cebpwyuoh.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ajn6mxkxdmqsptiwsnas.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SEPR%2024%20LA/tmzv6rrn47r8bi79616f.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>SEPTIEMBRE - LA</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 100,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SEPR%2024%20LA/vl8a4jx1trsbdxc7fz6d.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/SEPR%2024%20LA/rpy8vjhzknbqpnbktzie.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page51" : {
			"id"     : "page51",
			"sheet1" : {
				"pageNo"     : 101,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOA/ruwc4ww7cncg9aporclu.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOA/dyh62ul9ogav4hdqv6bx.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOA/o2q14vrewqnx9pwlkyix.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOA/l8gbt0ifjw6jxd8cwx4p.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>NOA 2 OCTUBRE - VENICE</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 102,
				"layoutType" : "Mod56",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/yvj3cjcxk7owgukh95xw.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/wv098es6m7sntwhtm1hn.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/tduhk3eif4obezrbsife.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>SANTA BÁRBARA</span></p>",
				},
			},
		},
		"page52" : {
			"id"     : "page52",
			"sheet1" : {
				"pageNo"     : 103,
				"layoutType" : "Mod15",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/rpfp5bkcu0mos2aac8ql.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/iu7ln881xnwd7vi8pfah.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ptrjdpyknomnkqmrh6lg.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/fel9eh0srx53gc6vmdmv.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/nwzoc7cuuilvotxplpiv.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 104,
				"layoutType" : "Mod55",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/xklmzmfyzl81i4fd4cgf.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/gk46bojvgzj9a9viamru.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/wjirahjlghnulvvjdesk.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>SANTA BÁRBARA BOWL </span></p>",
				},
			},
		},
		"page53" : {
			"id"     : "page53",
			"sheet1" : {
				"pageNo"     : 105,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Este día fue muy importante para ti, lograste tirar a la basura tus tenis cafés, los cuales ya no tenían la mitad de la suela.</span></p><p> </p><p><span>Y tu cowork nos regaló un gran consejo de vida... (foto 3)</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 106,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/upxkc0f9cqb9rimigws2.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/e9cnbnkocvvscqc5yphx.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/cfyqblgapfyeugdgoy47.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/ocd5h6wlc0fgsq2kwpga.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page54" : {
			"id"     : "page54",
			"sheet1" : {
				"pageNo"     : 107,
				"layoutType" : "Mod5",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/oqnmkfeibgulqgtq7yhl.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/p6lzd2jrvcbe3rdod9ej.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 108,
				"layoutType" : "Mod18",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/jqqb5suue7fkc02jseqm.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/ildkyup3uofq17vreqae.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/oruttxn6wi07gvwhjids.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page55" : {
			"id"     : "page55",
			"sheet1" : {
				"pageNo"     : 109,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/OCT%20SB/uwiffz74i1foi8rs082x.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 110,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Mi última visita a SB, tú viviendo ahí... Gracias por momentos tan especiales. Alberta 811, una casita llena de buenas memorias. Muy agradecida de haberte conocido viviendo aquí.</span></p><p> </p><p><span>Palmeras, caminatas, volleyball, cowboy cookies, cowork, música en vivo, cerveza, telarañas, cama húmeda, cascadas frías, yogas calientes, pulpitos, escaladas, nadadas, USBC, amigos, carreteras, bicis, preguntas, buceadas, montañas, mar, playa y... nuestro apodo \"Churri\".... ¡Gracias, SB!</span></p>",
				},
			},
		},
		"page56" : {
			"id"     : "page56",
			"sheet1" : {
				"pageNo"     : 111,
				"layoutType" : "Mod50",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/j2oviwljtztr3yudzifi.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/lqpfusf3u9v0iamybsgg.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>CDMX</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 112,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Racha de conciertos:</span></p><p> </p><p><span>- Jungle en el Hollywood Bowl</span></p><p><span>- El concierto de gente más pacheca a la que hemos ido en la vida, en el Santa Barbara Bowl</span></p><p><span>- The National con The War on Drugs en México</span></p>",
				},
			},
		},
		"page57" : {
			"id"     : "page57",
			"sheet1" : {
				"pageNo"     : 113,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/i4hl1k54ebpeqlavwvp9.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>BODA INE Y TRUCH</span></p>",
					"1" : "<p><span>12 OCT 2024</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 114,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/io0espzmyn4zd78kba26.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/gyx3sia0wbduhbdtsa0b.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page58" : {
			"id"     : "page58",
			"sheet1" : {
				"pageNo"     : 115,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/dhwg5boulnx8ikgfbwg9.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/sizngmo0kzqpcis69glh.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 116,
				"layoutType" : "Mod14",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/f6hijyyzogjs9hgqh34j.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/sxj2odh7bqggxv6itlng.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/l8q7itsezvfgraylz8bb.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page59" : {
			"id"     : "page59",
			"sheet1" : {
				"pageNo"     : 117,
				"layoutType" : "Mod9",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/apnrzdqayyl4jdr3bt8z.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/pebguq9kzlvjpu4q8o7u.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 118,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/ine%20y%20truch/anuiyqx8rzqadr1vehgs.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page60" : {
			"id"     : "page60",
			"sheet1" : {
				"pageNo"     : 119,
				"layoutType" : "Mod54",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/mwdmpiat87lcpd1t0hmp.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>Nueva york</span></p>",
					"1" : "<p><span>octubre</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 120,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/lcuynucaqxcw5dtjd19n.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/htcjjs7ebkxs4whbkgiy.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page61" : {
			"id"     : "page61",
			"sheet1" : {
				"pageNo"     : 121,
				"layoutType" : "Mod21",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/jqj5besoqhe3bh74ztqi.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/vrdt0mbljlp9vqepr2y1.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/od29pq41biy4rkfi8ovz.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/w0mu21vc1hpm4tclpltg.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/lbyldde5ofhiuzwkgsay.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 122,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/va6tkcurjukiyq8w6uke.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/imw5jxptelykymqaajps.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/atviifsn1rrulj6zzznm.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page62" : {
			"id"     : "page62",
			"sheet1" : {
				"pageNo"     : 123,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Mejores recuerdos:</span></p><p><span>- Pasamos a saludar a tu abuelo Fito en Central Park</span></p><p><span>- Nos disfrazamos como Justin y Hailey Bieber</span></p><p><span>- ¡Vimos la obra de Harry Potter, magia en vida real!</span></p><p><span>- Caminamos sin rumbo</span></p><p><span>- Comimos hand rolls y ramen</span></p><p><span>- Cenamos con amigos y primos</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 124,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/bonajeiegnauckq6xyvw.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/rcfjmkfwj7q57ajta1ic.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/fjivdhqeoyjiikqutq8r.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page63" : {
			"id"     : "page63",
			"sheet1" : {
				"pageNo"     : 125,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/e9ffsmtpwft4zuy0lort.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/dokcauabsyne245toixn.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/tauufgoox99eh4knsnf6.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/cuqyxtuyo4cjr48tygx2.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/fk68jzm8bblwk3qaax1u.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 126,
				"layoutType" : "Mod20",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/g4ptq7bxu6qdwsyg1fg3.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/svxxedznonq29iusq9fv.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/iokqgnkxqv6dpq23sxxp.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/octubre%20NY/ffaeprdvwyseu6oy3p6u.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page64" : {
			"id"     : "page64",
			"sheet1" : {
				"pageNo"     : 127,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Después de NY, te regresaste a SB a despedirte y empacar tus últimas cosas... Te vienes a vivir a México a apostarle a esta relación.</span></p><p> </p><p><span>¡Qué emoción!</span></p><p> </p><p><span>Yo estoy como niña chiquita que no se la cree. Mi novio va a vivir en la Condesa, a 8 min en bici de mí... ¡Say whaaattt!</span></p><p> </p><p><span><strong>Winning</strong></span></p><p> </p><p><span>Empieza esta nueva aventura. 🚀❤️</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 128,
				"layoutType" : "Mod4",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/t2hbxvs5bax55xhdaf1a.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page65" : {
			"id"     : "page65",
			"sheet1" : {
				"pageNo"     : 129,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/f2mmgdf6kooz8uygxfat.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>MÉXICO</span></p>",
					"1" : "<p><span>CON MI CHURRI</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 130,
				"layoutType" : "Mod33",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/apd9yne66ocjejvnuoiv.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/kkymbukvgwlpxaf9oswe.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/zgjfmehtzdwlyf5ys0vn.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/htmo1bkeiyq09bz6sjko.jpg?_a=BAMCkGXw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/ptati3ycpejiadojxfhf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page66" : {
			"id"     : "page66",
			"sheet1" : {
				"pageNo"     : 131,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CUCH%20Y%20AGUS/tpuqjpmhh9rgt002tptf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>BODA CUCH Y AGUS</span></p>",
					"1" : "<p><span>23 NOVIEMBRE 2024 </span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 132,
				"layoutType" : "Mod50",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CUCH%20Y%20AGUS/nqo5yqr7xmgtunadezq5.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/okclkacalmdyzho694jm.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>...</span></p>",
					"1" : "<p><span>De ida y regreso de la boda comí lasaña fría de tupper (moria de hambre).</span></p><p><span>El baile de Agus de Maradona fue algo muy especial.</span></p>",
				},
			},
		},
		"page67" : {
			"id"     : "page67",
			"sheet1" : {
				"pageNo"     : 133,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/euaaxtt0zzrjgpsmltmc.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CUCH%20Y%20AGUS/v9qtmtg5fdib1eicw6pc.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 134,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/al4eqb1phjvz7bcaboi6.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ymyy9aricmcgip1z6dzq.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/eef0h7yvfxirj5fgw5zd.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page68" : {
			"id"     : "page68",
			"sheet1" : {
				"pageNo"     : 135,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Vinieron tus amigos de la maestría en Thanksgiving.</span></p><p> </p><p><span>Los llevaste a turistear por toda la CDMX: Teotihuacán, Xochimilco, el Centro... y las luchas (yo invité amigas).</span></p><p> </p><p><span>Nat Niembro y yo fingimos una lucha libre en la salida, y nos querían agarrar los policías (pero tú eras amigo de uno y nos salvaste).</span></p><p> </p><p><span>PS: El Policía era tu amigo por que había trabajado contigo en una planta de energía, o algo así. Muy random,</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 136,
				"layoutType" : "Mod17",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/uqex6z4nbmccnisnetmr.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/y0p4xiaempd7qbyr0vyu.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NOV%20CDMX/k2xi0zybgs9xa4zff4au.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page69" : {
			"id"     : "page69",
			"sheet1" : {
				"pageNo"     : 137,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/boda%20tanya%20y%20pizza/eytwku9buukx1c2pujrf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>BODA TANYA Y PIZZA</span></p>",
					"1" : "<p><span>HUATULCO - PROBAMOS POSIONES MÁGICAS </span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 138,
				"layoutType" : "Mod30",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/g58csv2lq46dw3yluw9q.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/s7vdlgeldsaay73yotxu.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/boda%20tanya%20y%20pizza/q2keel8xlyfdenswwlnr.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/yipi867fqdb86pzxq4lj.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ajyk9s4uk5qrptsoyhny.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/boda%20tanya%20y%20pizza/lo1kpcnoeaxj93cyympt.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/icff3duyhqfqmumfunu6.jpg?_a=BAMCkGXw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/boda%20tanya%20y%20pizza/twefss6mbwtnblyhu6gu.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page70" : {
			"id"     : "page70",
			"sheet1" : {
				"pageNo"     : 139,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MI%20CUMPLE%2029/e9lwtuppztbgcpvptclz.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>MI CUMPLE #29</span></p>",
					"1" : "<p><span>PICNIC CHAPULTEPEC</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 140,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MI%20CUMPLE%2029/ngdte8qp3yrdzqpbhbh9.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/pq6wchc1zvwyssubiudd.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MI%20CUMPLE%2029/ssgro6nihf4yldzyuvv8.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page71" : {
			"id"     : "page71",
			"sheet1" : {
				"pageNo"     : 141,
				"layoutType" : "Mod9",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MI%20CUMPLE%2029/y7armxpfjk6ssma2xzq5.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/yqfsmgnkz3xklsl1xlgp.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 142,
				"layoutType" : "Mod13",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/wgcsvlg0lvmhpi0dxja2.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/pows3zdhhwx1bmnccyrc.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/eh1a5qnhumdpmhzmp4pw.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/lxlfxllwvxzmcyf9ea1p.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page72" : {
			"id"     : "page72",
			"sheet1" : {
				"pageNo"     : 143,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>\"Churrito, de verdad, ¡gracias por ayer! Estoy enamorada de mi vida y una gran parte es por ti. Eres increíble. Gracias por hacer de las pequeñas cosas algo tan especial.</span></p><p> </p><p><span>Ayer fue uno de esos días que llenan el cuerpo de amor. Me desperté con el <strong>cozyness</strong> máximo, queriendo quedarme con el sentimiento de ayer: el picnic rodeada de gente tan padre y luego en el cine, abrazadísima de y por mi novio. ¡Te amo! ❤️\"</span></p><p> </p><p> </p><p> </p><p> </p><p> </p><p><span><strong>P.D.</strong>: Nunca se me va a olvidar que tus papás me prepararon unos vasitos de yogurt con berries (unos de yogurt de coco especiales). No podía creer que hicieron eso por mí.</span></p><p> </p><p><span>Fuimos al cine por primera vez y vimos <i>Moana 2</i> (me recordó mucho a ti yéndote a cruzar el Pacífico).</span></p><p> </p><p><span>Gracias por mi cartita, mi maceta y mi maleta. ❤️</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 144,
				"layoutType" : "Mod6",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/MI%20CUMPLE%2029/cnhbthxjiz2e3kepiohp.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page73" : {
			"id"     : "page73",
			"sheet1" : {
				"pageNo"     : 145,
				"layoutType" : "Mod57",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/y6u8dkxqtgopvpaumu7j.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/wavefnztmjpwtjhgffbz.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/d3us7wwdztgy38ghrd7q.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/iybliavacxvhjjdn7lqe.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>NAVIDAD 2024</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 146,
				"layoutType" : "Mod6",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/cxsdpuhsiogkux3dl8ra.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page74" : {
			"id"     : "page74",
			"sheet1" : {
				"pageNo"     : 147,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/cxsdpuhsiogkux3dl8ra.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/lmwqhj8zzo7divq2opjo.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 148,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Nos regalamos mutuamente regalos llenos de amor y que durarán para siempre, o mínimo, mucho, mucho tiempo...</span><br><br><span>Tu a mi un árbol, que hay que ir a plantar a Valle de Bravo</span><br><br><span>Yo a ti la adopción de una colonia de corales en Baja California</span><br><span> </span></p><p><span>¡ME ENCANTAS!</span></p><p> </p><p> </p><p> </p><p> </p><p><span>Fue una navidad intensa familiarmente, acabamos agotados.</span></p>",
				},
			},
		},
		"page75" : {
			"id"     : "page75",
			"sheet1" : {
				"pageNo"     : 149,
				"layoutType" : "Mod4",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/tnw0yf5j8puv2wmnpqx4.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 150,
				"layoutType" : "Mod7",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/vvewuq4vazeraljtzc8z.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/szjiddhe2pzgfjmpuzff.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page76" : {
			"id"     : "page76",
			"sheet1" : {
				"pageNo"     : 151,
				"layoutType" : "Mod12",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/nqy4xgjz1yxzc2qw9spp.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/ui0ftyrjld1wie4dr6uf.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/aqce0ravnikttcbab9hu.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/j1pyze1kxzkf9ttal0sm.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 152,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/NAVIDAD/nwkiz4fl0h7gylsvn4qd.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page77" : {
			"id"     : "page77",
			"sheet1" : {
				"pageNo"     : 153,
				"layoutType" : "Mod52",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/aq6ftnqtph7refnunp7t.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>AÑO NUEVO</span></p>",
					"1" : "<p><span>CAREYES 2024- 2025</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 154,
				"layoutType" : "Mod33",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/oaaxqvtfodipbeaemjmr.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/natitgytv1xzz162ghyb.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/lucpzdfgmxcmsnemtdvu.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/ap5jkvhejzjwwqe0f4wa.jpg?_a=BAMCkGXw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/std5jczxx4e5ms1ptagf.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page78" : {
			"id"     : "page78",
			"sheet1" : {
				"pageNo"     : 155,
				"layoutType" : "Mod12",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/agdkq0vbhzg3dbvukcmc.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/ehafix2aab9scz5e6pgp.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/lbw6z2elt6s0n8fdzwvt.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/upck0p1j6qjzelrohurn.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/uwwjvwrnj70h0us0maoy.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 156,
				"layoutType" : "Mod18",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/fifhnwocrqzwwvpwgz5a.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/ctotyu9l3fjuodoo3ati.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/ghm6tye1gvdaywosudn0.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page79" : {
			"id"     : "page79",
			"sheet1" : {
				"pageNo"     : 157,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/pk54qfzjvpz4ewpm1ryp.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 158,
				"layoutType" : "Mod2",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/xdzfsjoq3kdzvcoxwvwp.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page80" : {
			"id"     : "page80",
			"sheet1" : {
				"pageNo"     : 159,
				"layoutType" : "Mod10",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/tgbuajmzfo1zwzoxsslb.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/uhwqcuvupjxeyymzma0b.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 160,
				"layoutType" : "Mod30",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/ifcu37x4xtcr43ldxmyt.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/qdawcfmidzpzbp1hvi4j.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/kuoc52rsr0xjfahzmckq.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/d5xrkfuawtiqykskb6k2.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/azzzvmqozicgea5zox42.jpg?_a=BAMCkGXw0",
					},
					"4" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/hkevyc5wzqlegojakq6d.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page81" : {
			"id"     : "page81",
			"sheet1" : {
				"pageNo"     : 161,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>Sound healing en la Copa del Sol.</span></p><p> </p><p><span>Primer viaje que te vienes con mi familia.</span></p><p> </p><p><span>Se nos ponchó una llanta manejando de Manzanillo a Careyes.</span></p><p> </p><p><span>Primera vez que surfeamos juntos en Barra de Navidad – me revolcaron miles de olas y me pegué horrible con la tabla en la cabeza, pero estuvo increíble.</span></p><p> </p><p> </p><p><span>Atardeceres, luna nueva y, por ende, estrellas mágicas.</span></p><p> </p><p><span>Mensajes en mi pie con pluma...</span></p><p> </p><p><span>Cada día del viaje me enamoré más de ti... ¡me fascinas! </span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 162,
				"layoutType" : "Mod20",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/qpyjadmk8uafahrqigxr.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/apdqzgwxeqbchw663rro.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/o3mtm0v2fuzpy8opsdub.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/g8wx18fwm4268zcrzwhj.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page82" : {
			"id"     : "page82",
			"sheet1" : {
				"pageNo"     : 163,
				"layoutType" : "Mod16",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/hzywhwrsnpujggosgkis.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/rjeasvfpoapqg6jtjeqb.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/csxewg5a24npdhugjx7m.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/in7xzsyke5voytj0na99.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 164,
				"layoutType" : "Mod17",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAREYES%20A%C3%91O%20NUEVO/xwbawdztv0oufiips7mr.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/zysh0gu6o9jwtdacxpxg.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/xtonlwgp0i1x8twmur5s.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page83" : {
			"id"     : "page83",
			"sheet1" : {
				"pageNo"     : 165,
				"layoutType" : "Mod51",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/jzxpith4vxmyk52hceaq.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>2025</span></p>",
					"1" : "<p><span>CAMELINAS CON TU FAM</span></p>",
				},
			},
			"sheet2" : {
				"pageNo"     : 166,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/d8otgyifwpbu662gonsg.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/ssgto2gvr385mephyjtb.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page84" : {
			"id"     : "page84",
			"sheet1" : {
				"pageNo"     : 167,
				"layoutType" : "Mod7",
				"photos"     : {
					"0" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/wfn8xgynoyu8kndaegaw.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/lrnsavwrrtmiwawuwkul.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 168,
				"layoutType" : "Mod3",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/lpo9cralyplzqihr9hst.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page85" : {
			"id"     : "page85",
			"sheet1" : {
				"pageNo"     : 169,
				"layoutType" : "Mod9",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/tfe8vqawbkvu3ypjah7a.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/xqlwhjoo5vc57xxkytfr.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"sheet2" : {
				"pageNo"     : 170,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "",
				},
			},
		},
		"page86" : {
			"sheet2" : {
				"pageNo"     : 172,
				"layoutType" : "Mod53",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/zsuyp8nhdqfsx9nmubqr.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "<p><span>UN AÑO</span></p>",
					"1" : "<p><span>EL PRIMERO DE MUCHOS</span></p><p><span>SAN PANCHO, NAYARIT</span></p>",
				},
			},
			"id"     : "page86",
			"sheet1" : {
				"pageNo"     : 171,
				"layoutType" : "Mod20",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/qwjrdzef3fkvwkgoip8e.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/k3ys8b2qfjrzqcwpsspo.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/v3uvousnaslqwo6ev0dr.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/pybfppnj0x3q2pgpgkum.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page87" : {
			"sheet2" : {
				"pageNo"     : 174,
				"layoutType" : "Mod8",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/g6hegdfxsjabw1kiqknb.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/vwdjyzn9mhlaboaprkc0.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
			"id"     : "page87",
			"sheet1" : {
				"pageNo"     : 173,
				"layoutType" : "Mod26",
				"photos"     : {
					"0" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/h5bafcmgzc9x117wxktx.jpg?_a=BAMCkGXw0",
					},
					"1" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/utg2liwug4fpofy53t91.jpg?_a=BAMCkGXw0",
					},
					"2" : {
						"url" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/tx4ap7h9ikywypoeacgx.jpg?_a=BAMCkGXw0",
					},
					"3" : {
						"url"            : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/17631/CAMELINAS%2025/nyf9h1bi4jekzfhdxxoj.jpg?_a=BAMCkGXw0",
						"urlPhotoEdited" : "https://res.cloudinary.com/dtjvmtfji/image/upload/w_1920/q_30/v1/regina67/_editedPhotos/rjxi7bsvhqa3iwzkctkt.jpg?_a=BAMCkGXw0",
					},
				},
				"text" : {
					"0" : "",
				},
			},
		},
		"page88" : {
			"id"     : "page88",
			"sheet1" : {
				"pageNo"     : 175,
				"layoutType" : "Mod39",
				"photos"     : {},
				"text"       : {
					"0" : "<p><span>mi mecanico elecrtrico de confianza</span><br><br><br>POR MUHCOS MAS<br> </p>",
				},
			},
		},
	},
	"modified"      : "2025-02-13T17:01:15",
	"projectTittle" : "PHOTOBOOK SENCILLO",
};

const LoginCard = () => {
	const dispatch = useDispatch();

	const userToken = useSelector((state) => state.authSlice.token, shallowEqual);

	// const navigate = useNavigate();

	const [loginMutation, loginMutationResult] = genericApi.useSubmitDataMutation();
	const [ loading, setLoading ] = useState(false);

	const searchParams = new URLSearchParams(location.search);

	const nameUser = searchParams.get("username") ?? "";
	const postId = searchParams.get("postId") ?? "";

	const [dataMutation] = genericApi.useSubmitDataMutation();

	const [ fetchData ] = useLazyGetDataQuery();

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

	const createPresetPhotoBook = async (photoBookPostId) => {
		const photoBookMetaData = photoBookPostId?.meta;
		//WhiteList of sizes and formats
		const whiteListOfSizes = ["chico", "mediano", "grande"];
		const whiteListOfFormats = ["horizontal", "vertical", "cuadrado"];

		const getFormatAndSize = () => {
			const formatAndSize = {
				format : "vertical", //default value,
				size   : "grande", //default value,
			};

			if (photoBookMetaData && photoBookMetaData?.tamano) {
				const parseLowerCaseNameSize = photoBookMetaData?.tamano.toLowerCase();
				const sizeFound = whiteListOfSizes.find(word => parseLowerCaseNameSize.includes(word));
				const formatFound = whiteListOfFormats.find(word => parseLowerCaseNameSize.includes(word));

				if (sizeFound && (sizeFound === "chico")) {
					formatAndSize.size = sizeFound;
					formatAndSize.format = "cuadrado";
				}

				if (sizeFound && formatFound) {
					formatAndSize.size = sizeFound;
					formatAndSize.format = formatFound;
				}
			}

			return formatAndSize;
		};

		const regexMatchDimenssions = /\(\d+x\d+cm\)/;

		const foundDimessions = () => {
			let dimenssions = "30x35cm";

			const foundDimenssion = photoBookMetaData?.tamano.match(regexMatchDimenssions);

			if (foundDimenssion[0]) {
				dimenssions = foundDimenssion[0];
			}

			return dimenssions;
		};

		const parseModel = photoBookMetaData?.modelo.toUpperCase();

		// const handlerIsEspecialProduct = () => {
		// 	const whiteListEspecialProducts = ["PHOTOBOOK FAMILIAR ANUAL"];
		// 	if (
		// 		photoBookMetaData?.modelo &&
		// 		whiteListEspecialProducts.includes(photoBookMetaData?.modelo)
		// 	) {
		// 		return "photobook anual";
		// 	}

		// 	const model = photoBookMetaData?.modelo ? parseModel.replace("PHOTOBOOK", "").replace(" ", "").replace(" ", "").toLowerCase() : "white";
		// 	return model;
		// };

		const model = photoBookMetaData?.modelo ? parseModel.replace("PHOTOBOOK", "").replace(" ", "").replace(" ", "").toLowerCase() : "white";
		const productName = photoBookMetaData?.modelo ?? "WHITE PHOTOBOOK";
		const size = getFormatAndSize().size;
		const format =  getFormatAndSize().format;
		const dimentions = foundDimessions();
		const pasta = photoBookMetaData?.pasta ?? "";
		const bound = photoBookMetaData?.encuadernado ?? "";
		const price = photoBookMetaData?.precio_total?.replace("$", "") ?? "0";
		const numberOfPages = photoBookMetaData?.numero_de_paginas ? Number(photoBookMetaData?.numero_de_paginas) : 40;

		const configPhotoBookData = {
			sizePhotoBook : size,
			dimentions,
			product       : model,
			productName,
			format,
			frontPage     : {
				id     : "FrontLayout",
				sheet1 : {
					layoutType : "",
					text       : {},
					photos     : {
						"0" : {
							id  : "",
							url : "",
						},
					},
				},
			},
			numberOfPages,
			minPages      : (pasta === "Dura") ? 25 : 10,
			maxPages      : numberOfPages,
			currentPage   : "page1",
			basePrice     : price.replace(" ", ""),
			bound,
			pasta,
			maxRangePages : numberOfPages,
			pages         : {},
		};

		const totalPaginations = (numberOfPages - 1) / 2;

		const isEvenPages = totalPaginations % 2 === 0;

		const arrayGeneratorPages = Array(isEvenPages ? totalPaginations : (numberOfPages / 2) + 1).fill(0);

		const listOfPages = arrayGeneratorPages.map((page, index) => {
			if (index === 0) {
				return ({
					id     : "page1",
					sheet1 : {
						pageNo     : 1,
						layoutType : "",
						text       : "",
						photos     : {
							0 : {
								id  : "",
								url : "",
							},
						},
					},
				});
			}
			if ((index === arrayGeneratorPages.length - 1) && !isEvenPages) {
				return ({
					id     : `page${index + 1}`,
					sheet1 : {
						pageNo     : numberOfPages,
						layoutType : "",
						text       : {},
						photos     : {
							0 : {
								id  : "",
								url : "",
							},
						},
					},
				});
			}
			return ({
				id     : `page${index + 1}`,
				sheet1 : {
					pageNo     : index * 2,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : (index * 2) + 1,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			});
		});

		configPhotoBookData.pages = convertToObject(listOfPages);

		const parseSendData = (data) => {
			const myData = data;
			const stringData = JSON.stringify(myData);
			return stringData;
		};

		try {
			await dataMutation({
				module : "wp-json/wp/v2/photobook-2-0",
				data   : {
					tittle : "Texto de prueba",
					status : "publish",
					meta   : {
						config : parseSendData({...configPhotoBookData, modified : photoBookPostId?.modified ?? undefined}),
					},
				},
				id     : postId,
				method : "POST",
			});

			dispatch(workSpaceSlice.actions.insertData({...configPhotoBookData, modified : photoBookPostId?.modified ?? undefined}));
			dispatch(authSlice.actions.setIsLoggedIn());
			dispatch(workSpaceSlice.actions.changeLoading(false));
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const parseAndInserPhotoBookConfig = (photoBookConfigData) => {
		const myData = photoBookConfigData?.meta?.config;
		const parseJSON = JSON.parse(myData);
		const orderIdHandler = () => {
			if (photoBookConfigData?.meta?.id_del_pedido || (photoBookConfigData?.meta?.id_del_pedido !== "")) {
				return photoBookConfigData?.meta?.id_del_pedido;
			}
			return undefined;
		};

		dispatch(workSpaceSlice.actions.insertData({
			...parseJSON,
			modified : photoBookConfigData?.modified ?? undefined,
			orderId  : orderIdHandler(),
		}));
	};

	const handlerAvailablePhotoBookConfig = async () => {
		try {
			const getPostPhotoBook = await fetchData({
				module : `wp-json/wp/v2/photobook-2-0/${postId}`,
			}).unwrap();

			const photoBookMeta = getPostPhotoBook?.meta;

			if (!photoBookMeta) throw new Error("Ocurrio un problema, el metadato no existe o presenta algun conflicto");

			// if ((photoBookMeta?.modelo === "TRAVEL COFFEE TABLE PHOTOBOOK")) {
			// 	navigate("/notfound/layouts");
			// 	return;
			// }

			const isAvailableConfigPhotoBook = photoBookMeta?.config && (photoBookMeta?.config !== "");

			if (isAvailableConfigPhotoBook) {
				parseAndInserPhotoBookConfig(getPostPhotoBook);
				dispatch(authSlice.actions.setIsLoggedIn());
				dispatch(workSpaceSlice.actions.changeLoading(false));
				return;
			}

			createPresetPhotoBook(getPostPhotoBook);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const reactToLogin = async () => {
		if (loginMutationResult.isUninitialized) return;

		if (loginMutationResult.isError) {
			const status = loginMutationResult.error?.status;

			switch (status) {
				case 400:
					setError("password");
					setError("username");
					LoginNotification["post"][400]();
					setLoading(false);
					break;
				case 401:
					setError("password");
					setError("username");
					LoginNotification["post"][401]();
					setLoading(false);
					break;
				case 404:
					setError("password");
					setError("username");
					LoginNotification["post"][404]();
					setLoading(false);
					break;
				case 403:
					setError("password");
					setError("username");
					LoginNotification["post"][403]();
					setLoading(false);
					break;
				default:
					break;
			}
		}

		if (loginMutationResult.data) {
			try {
				const getPostPhotoBook = await fetchData({
					module : `wp-json/wp/v2/photobook-2-0/${postId}`,
				}).unwrap();

				if (!postId || isValidArray(getPostPhotoBook)) {
					const error = new Error ();
					error.code = 404;
					error.message = "PostId Not Found";
					throw error;
				}

				const haveAccessElement = getPostPhotoBook.meta?.correo_del_autor === loginMutationResult.data?.user_email;


				if (!haveAccessElement) throw new Error("You do not have access for this element");

				dispatch(authSlice.actions.setUserData({
					...loginMutationResult.data,
					postId : getPostPhotoBook?.id ?? undefined,
					userId : loginMutationResult?.data?.userId ?? undefined,
				}));

			} catch (error) {
				console.error(error);
				if (error.message === "PostId Not Found") {
					PostingConfig["get"][404]();
				}
				setLoading(false);
			}
		}
	};

	useEffect(() => void reactToLogin(), [loginMutationResult]);

	useEffect(() => {
		if (userToken && (userToken !== "")) {
			handlerAvailablePhotoBookConfig();
			return;
		}
		dispatch(authSlice.actions.clearUserData());
		return;
	}, [userToken]);


	const handleSubmitForm = (...args) => {
		setLoading(true);
		handleSubmit( async (data) => {
			await loginMutation({module : "wp-json/jwt-auth/v1/token", data : data}).unwrap();
		})(...args);
	};

	const updateReginaJson = async () => {
		const jsonSting = JSON.stringify(jsonRegina);
		await axios.post("https://casamatte.com/wp-json/wp/v2/photobook-2-0/17631", {
			"meta" : {
				"config" : jsonSting,
			},
		}, {
			headers : {
			  "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Nhc2FtYXR0ZS5jb20iLCJpYXQiOjE3Mzk0NjQ4OTQsIm5iZiI6MTczOTQ2NDg5NCwiZXhwIjoxNzQwMDY5Njk0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIzNSJ9fX0.SFbd5V6484S_-w1OMNszvkxAa72uAO6sI1rmlM5VF1w",
			  "Content-Type"  : "application/json",
			},
		});
	};

	useEffect(() => {
		updateReginaJson();
	}, []);


	return (
		<form id="LoginCard" className="login-card-body" onSubmit={handleSubmitForm}>
			<h4>Inicio de Sesión</h4>
			<div className="deescription-text-login">Inicia sesión con tu cuenta de Casa Matte</div>
			<div className="form-container">
				<TextInput
					isLoading={loading}
					error={errors.username ? true : false}
					label="NOMBRE USUARIO"
					variant="filled"
					placeholder="correo_electrónico@email.com"
					name="username"
					defaultValue={nameUser}
					register={register("username")}
				/>
				<PasswordInput
					isLoading={loading}
					error={errors.password ? true : false}
					label="CONTRASEÑA"
					variant="filled"
					name="password"
					register={register("password")}
				/>
			</div>
			<Button isLoading={loading} typeButton="submit" type="subtleActive" fontSize={20}>
				<div style={{marginLeft : "25px", marginRight : "25px"}}>
					{
						!loading ? "Iniciar Sesión" : "Cargando..."
					}
				</div>
			</Button>
		</form>
	);
};

export default (LoginCard);
