import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/HomeScreen";
import LoginModule from '../screens/LoginModule';
import SignupForm from '../screens/SignupForm';
import Categories from '../screens/Categories';
import ProductsScreen from '../screens/productsScreen';
import ProductDetail from '../screens/ProductDetail';
//import DrawerIcon from '../components/DrawerIcon';
import HomeScreen from '../screens/HomeScreen';
import AppDrawerNavigator from './AppDrawerNavigator';

const Stack = createNativeStackNavigator();



const AppNavigator=()=> (
    

    
    
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTintColor: "yellow",
          headerTitleStyle: {
            frontWeight: 'bold'
          },
          
          
        }}>
       
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='LoginPage' component={LoginModule}/>
        <Stack.Screen name='Categories' component={Categories}/>
        <Stack.Screen name='productsScreen' component={ProductsScreen}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='SignupForm' component={SignupForm}/>

        <Stack.Screen name='Modal' component={AppDrawerNavigator}
         options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )

export default AppNavigator;