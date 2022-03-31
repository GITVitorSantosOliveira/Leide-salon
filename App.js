import React from "react";
import { SafeAreaView } from "react-native";
import InitialScreen from "./src/screens/InitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from "./src/screens/SignUpScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator> 
    //       <Stack.Screen name="Initial Screen" component={InitialScreen} >
          <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fce7d2'}}>
              {/* <InitialScreen/> */}
              <SignUpScreen/>
            </SafeAreaView>
    //       </Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}