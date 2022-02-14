/*
 * @Author: Gilang
 * @Date:   2022-02-13 11:13:57
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:20:11
 */

import React from "react";

import { MenuItem } from "@material-ui/core";
import Grid from "../../components/Grid";

const ImageGrid = ({ ...props }) => {
	return (
		<>
			<Grid
				{...props}
				resource="images"
				title="Images Container"
				createButton={false}
				rowClick="edit"
			/>
		</>
	);
};

export default ImageGrid;