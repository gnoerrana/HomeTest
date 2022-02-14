/*
* @Author: Gilang
* @Date:   2022-02-14 22:22:05
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-15 00:22:38
*/

import {
  MenuItemLink,
} from 'react-admin';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

const Menu = ({ onMenuClick, dense }) => {
	return (
	<>
		<MenuItemLink
          to="/images"
          primaryText='Images Container'
          leftIcon={<CameraAltIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/color-picker"
          primaryText='Color Picker'
          leftIcon={<ColorLensIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/text-converted"
          primaryText='Number to text'
          leftIcon={<TextIncreaseIcon />}
          dense={dense}
        />
    </>
	)
}

export default Menu;