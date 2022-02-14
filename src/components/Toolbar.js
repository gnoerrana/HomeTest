/*
* @Author: Gilang
* @Date:   2022-02-14 20:09:25
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-14 23:07:24
*/

import React from 'react';
import PropTypes from 'prop-types';
import { TopToolbar, useTranslate } from 'react-admin';
import { makeStyles, Box } from '@material-ui/core';
import Pagination from './Pagination';
const useStyles = makeStyles((theme) => ({
  RowActions: {
    alignItems: 'center',
    display: 'flex',
    marginTop: -1,
    marginBottom: -1,
  },
  GridToolbar: {
    minHeight: 'inherit',
    paddingTop: 0,
    paddingBottom: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& > div': {
      '& > button': {
        // color: ThemeColor.gray,
        // borderColor: ThemeColor.lightGray,
        marginBottom: theme.spacing(1),
      },
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
    '& .MuiFormControl-root': {
      '& .MuiOutlinedInput-root': {
        '& .MuiSelect-root': {
          padding: `11px ${theme.spacing(4)}px 10px ${theme.spacing(2)}px`,
        },
        '& .MuiSelect-icon': {},
        '&:hover': {
          '& .MuiSelect-root': {},
          '& .MuiOutlinedInput-notchedOutline': {},
        },
        '& input': {
          '&:focus, &:hover': {},
        },
      },
      '&:not(.MuiTextField-root) fieldset': {
        borderWidth: '1px !important',
      },
      '&.PageJumper': {
        '& label': {
          transform: 'none',
          position: 'relative',
        },
      },
    },
  },
  ToolbarLeft: {
    display: 'flex',
    alignSelf: 'flex-start',
  },
  ToolbarRight: {
    display: 'flex',
    alignSelf: 'flex-end',
    paddingBottom: theme.spacing(1),
  },
}));

const Toolbar = ({
  className,
  gridColumns,
  updateColumns,
  paginationProps,
  selectedIds,
  records,
  bulkActionMenus,
  bookmarkScopeSuffix,
  filters,
  isKeyWord,
  filterConfig,
  ...rest
}) => {
  const translate = useTranslate();
  const classes = useStyles();

  return (
    <TopToolbar className={[className, classes.GridToolbar].join(' ')}>
      <Box className={classes.ToolbarRight}>
        {paginationProps ? <Pagination {...paginationProps} /> : ''}
      </Box>
    </TopToolbar>
  );
};

export default Toolbar;
