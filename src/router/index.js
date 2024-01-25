import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  UploadPhoto,
  Home,
  Hospitals,
  Doctor,
  Chat,
  Account,
  ListDoctorAnak,
  ListDoctorTHT,
  ListDoctorBedah,
  Apoteker,
  ListDoctorKandungan,
  DoctorBooking,
  Chatting,
  UserProfile,
  EditProfile,
} from '../pages';
import {BottomNavigator} from '../component';
import ListDoctor from '../pages/ListDoctor';
import DoctorProfile from '../pages/DoctorProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDoctorAnak"
        component={ListDoctorAnak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDoctorTHT"
        component={ListDoctorTHT}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDoctorBedah"
        component={ListDoctorBedah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apoteker"
        component={Apoteker}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDoctorKandungan"
        component={ListDoctorKandungan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorBooking"
        component={DoctorBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
