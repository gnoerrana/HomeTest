/*
 * @Author: Gilang
 * @Date:   2022-02-13 20:35:16
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:10:39
 */

import React, { useEffect, useRef, useState } from "react";
import { Datagrid, useListContext, Loading } from "react-admin";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Container from "@mui/material/Container";
import { Paper, useTheme } from "@material-ui/core";
import clsx from "clsx";
import { CircularProgress } from "@material-ui/core";

import GridSelector from "./GridSelector";
import Toolbar from "../Toolbar";

const GridView = ({ title, ...rest }) => {
	const [viewType, setViewType] = useState("gridView");
	const viewMode = (theView) => {
		setViewType(theView);
	};
	const toolbarRef = useRef(null);

	const { page, loading, setPage, data } = useListContext();

	const { body, rowStyle, rowClick, expand, isRowSelectable } = rest;
	const entries = Object.values(data);
	return (
		<>
			<Container maxWidth="sm">
				<Box sx={{ width: 600, overflowY: "scroll" }}>
					<GridSelector {...rest} viewMode={viewMode} />
					{loading ? (
						<CircularProgress />
					) : (
						<>
							<ImageList
								variant="masonry"
								cols={viewType === "gridView" ? 2 : 1}
								gap={5}
							>
								{entries.map((item) => (
									<ImageListItem key={item.img}>
										<img
											src={`${item.download_url}?w=248&fit=crop&auto=format`}
											srcSet={`${item.download_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
											alt={item.author}
											loading="lazy"
										/>
										<ImageListItemBar
											position="below"
											title={item.author}
										/>
									</ImageListItem>
								))}
							</ImageList>
						</>
					)}
					<GridSelector {...rest} viewMode={viewMode} />
				</Box>
			</Container>
		</>
	);
};

GridView.propTypes = {
	...Datagrid.propTypes,
};

GridView.defaultProps = {
	createButton: false,
	children: <></>,
};

export default GridView;