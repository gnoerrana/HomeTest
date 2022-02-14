/*
* @Author: Gilang
* @Date:   2022-02-14 22:45:55
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-15 00:11:23
*/

import React , { useRef } from 'react';
import PropTypes from 'prop-types';
import { TopToolbar, useListContext } from 'react-admin';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import Toolbar from '../Toolbar';
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

const GridSelector = ({
  className,
  ...rest
}) => {
  const classes = useStyles();
  const toolbarRef = useRef(null);
  const {
		total,
		page,
		loading,
		setPage,
		perPage,
		setPerPage,
		selectedIds,
		data,
	} = useListContext();

  const HandleGridView = () => {
    rest.viewMode('gridView');
  };
  const HandleListView = () => {
    rest.viewMode('listView');
  };
  return (
    <TopToolbar className={[className, classes.GridToolbar].join(' ')}>
    	<IconButton
          aria-label="Grid View"
          onClick={HandleGridView}
          disabled={rest.viewMode === 'gridView'}
        >
          <GridViewIcon fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="List View"
          onClick={HandleListView}
          disabled={rest.viewMode === 'listView'}
        >
          <ViewStreamIcon fontSize="small" />
        </IconButton>
    	
      <Box className={classes.ToolbarRight}>
        	<div ref={toolbarRef}>
		        <Toolbar
		          paginationProps={{
		            total,
		            page,
		            setPage,
		            perPage,
		            setPerPage,
		          }}
		          records={data}
		        />
		      </div>
      </Box>
    </TopToolbar>
  );
};

export default GridSelector;
