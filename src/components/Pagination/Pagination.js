/*
 * @Author: Gilang
 * @Date:   2022-02-14 20:06:51
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:16:02
 */

import React from "react";
import PropTypes from "prop-types";
import { useTranslate } from "react-admin";
import {
	makeStyles,
	FormControl,
	Select,
	MenuItem,
	Box,
	IconButton,
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
	PageNavigator: {
		"& button": {
			padding: "9px",
			// color: ThemeColor.palette.primary.main,
		},
		"& > span": {
			display: "inline-flex",
			width: "1px",
			height: theme.spacing(3),
			margin: `-${theme.spacing(1)}px 0`,
			// background: ThemeColor.gray,
		},
	},
}));

/**
 * Grid pagination component
 *
 * @param {number} page
 * @param {number} perPage
 * @param {number} total
 * @param {function} setPage
 * @param {function }setPerPage
 * @return {Element}
 * @constructor
 */
const Pagination = ({
	page,
	perPage,
	total,
	setPage,
	setPerPage,
	onResetSelectedId,
}) => {
	const classes = useStyles();

	return (
		<>
			<Box className={`PageStatus ${classes.PageStatus}`}></Box>
			<Box className={`PageNavigator ${classes.PageNavigator}`}>
				<IconButton
					aria-label="Previous page"
					onClick={() => {
						setPage(page - 1);
						onResetSelectedId();
					}}
					disabled={page === 1}
				>
					<ArrowBackIosIcon fontSize="small" />
				</IconButton>
				<span />
				<IconButton
					aria-label="Next page"
					onClick={() => {
						setPage(page + 1);
						onResetSelectedId();
					}}
				>
					<ArrowForwardIosIcon fontSize="small" />
				</IconButton>
			</Box>
		</>
	);
};

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
	perPage: PropTypes.number.isRequired,
	setPerPage: PropTypes.func.isRequired,
};


export default Pagination;