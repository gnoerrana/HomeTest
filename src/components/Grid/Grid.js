/*
 * @Author: Gilang
 * @Date:   2022-02-13 11:26:05
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:10:03
 */

import React from "react";
import { createPortal } from "react-dom";
import { ListBase, Datagrid } from "react-admin";
import GridView from "./GridView";

const GridTitle = ({ title }) => {
	const titleContainer =
		typeof document !== "undefined"
			? document.getElementById("react-admin-title")
			: null;

	return createPortal(<span>{title}</span>, titleContainer);
};

const Grid = (props) => {
	const { resource, basePath, title, page , perPage } = props;
	return (
		<>
			<GridTitle title={title} />
			<ListBase
				basePath={basePath}
				resource={resource}
				perPage={perPage || 10}
				sort={false}
			>
				<GridView {...props} />
			</ListBase>
		</>
	);
};

export default Grid;