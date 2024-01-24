import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import AllCar from './screens/AllCar';
import { Provider } from 'react-redux';
import {store} from './storage/store'
import CarDetail from './screens/CarDetail';
import ManageCar from './screens/ManageCar';
import UpdateScreen from './screens/UpdateScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function CarOverview(){

    return (
      <Drawer.Navigator initialRouteName='AllCar' >
        <Drawer.Screen name='Araçları Listele' component={AllCar} ></Drawer.Screen>
        <Drawer.Screen name='Araç Ekle' component={ManageCar} ></Drawer.Screen>
      </Drawer.Navigator>
    )
}


export default function App() {
  return (
   <>
    <StatusBar style='light' ></StatusBar>
    <Provider store={store} >
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='CarOverview' component={CarOverview} ></Stack.Screen>
        <Stack.Screen name='CarDetail' component={CarDetail} options={{
          presentation:'modal'
        }} ></Stack.Screen>
        <Stack.Screen name='AllCar' component={AllCar} ></Stack.Screen>
        <Stack.Screen name='UpdateScreen' component={UpdateScreen} ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
