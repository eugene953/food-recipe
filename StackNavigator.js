import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen';
import { Ionicons } from '@expo/vector-icons';


const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

function BottomTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name ="Home" 
            component={HomeScreen} 
            options={{tabBarLabel:"Home",
            headerShown:false, tabBarIcon:({focused}) => focused ? (
<Entypo name="home" size={24} color="black" />
            ) : (
<AntDesign name="home" size={24} color="black" />
            ) }}
            />

<Tab.Screen name ="Saved" 
            component={SavedScreen} 
            options={{tabBarLabel:"Saved",
            headerShown:false, tabBarIcon:({focused}) => focused ? (
<AntDesign name="heart" size={24} color="black" />
            ) : (
<AntDesign name="hearto" size={24} color="black" />
            ) }}
            />

<Tab.Screen name ="Booking" 
            component={BookingScreen} 
            options={{tabBarLabel:"Booking",
            headerShown:false, tabBarIcon:({focused}) => focused ? (
<Ionicons name="notifications" size={24} color="black" />
            ) : (
<Ionicons name="notifications-outline" size={24} color="black" />
            ) }}
            />

<Tab.Screen name ="Profile" 
            component={ProfileScreen} 
            options={{tabBarLabel:"Profile",
            headerShown:false, tabBarIcon:({focused}) => focused ? (
<Ionicons name="person" size={24} color="black" />
            ) : (
<Ionicons name="person-outline" size={24} color="black" />
            ) }}
            />
        </Tab.Navigator>
    );
}
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})