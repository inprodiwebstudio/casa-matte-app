/* eslint-disable import/no-extraneous-dependencies */
import path            from "path";
import { readdirSync } from "fs";

import { defineConfig } from "vite";
import react            from "@vitejs/plugin-react";
import ckeditor5        from "@ckeditor/vite-plugin-ckeditor5";

import { createRequire } from "node:module";

const require = createRequire( import.meta.url );
const absolutePathAliases = {};
// Root resources folder
const srcPath = path.resolve("./src/");
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes : true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ""));

srcRootContent.forEach((directory) => {
	absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins : [
		react(),
		ckeditor5( { theme : require.resolve( "@ckeditor/ckeditor5-theme-lark" ) } ),
	],
	resolve : {
		alias : {
			...absolutePathAliases,
		},
	},
	server : {
		open  : true,
		host  : "0.0.0.0",
		proxy : {
			"/api" : "casamatte.wip-inprodi.com",
		},
	},
});
