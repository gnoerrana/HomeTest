
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { CustomLayout } from './layouts';
import { dataProvider } from './providers';
import Images from './resources/ImageGrid';
import ColorPicker from './resources/ColorPicker';
import TextConverted from './resources/TextConverted';

const App = ({ ...props }) => {
  return (
    <Admin
      {...props}
      dataProvider={dataProvider}
      title="Goplay Test"
      layout={CustomLayout}
    >
      {() => [
        <Resource name="images" {...Images} />,
        <Resource name="color-picker" {...ColorPicker} />,
        <Resource name="text-converted" {...TextConverted} />,
      ]}
    </Admin>
  );
};

export default App;