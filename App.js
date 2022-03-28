import React from "react";
import { SafeAreaView } from "react-native";
import InitialScreen from "./src/screens/InitialScreen";
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <InitialScreen/>
    </SafeAreaView>
  );
}