/*
 * @Author: Gilang
 * @Date:   2022-02-14 21:31:19
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:13:21
 */

import { Layout } from "react-admin";
import Menu from "./Default/Menu";

const CustomLayout = (props) => <Layout {...props} menu={Menu} />;

export default CustomLayout;