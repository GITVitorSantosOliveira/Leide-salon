import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginScreen/>
    </SafeAreaView>
  );
}