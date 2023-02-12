import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalScreen from "../screens/ModalScreen";


const Drawer= createDrawerNavigator();

const AppDrawerNavigator=({navigation})=>(
   

    <Drawer.Navigator>

      <Drawer.Screen name="Modal" component={ModalScreen}/>

    </Drawer.Navigator>

);

export default AppDrawerNavigator;