import { View,Text,StyleSheet,Image } from "react-native";
import Input from "../../components/Input";
import { Hurricane_400Regular, useFonts } from "@expo-google-fonts/hurricane";
import AppLoading from 'expo-app-loading';
import Button from "../../components/Button";
const LoginScreen =()=>{
  let [fontsLoaded] = useFonts({
    Hurricane_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const styles = StyleSheet.create({
    textButton: {
      fontWeight: "bold",
      fontSize: 18,
      color: 'white'
    },
    FirebaseButton:{
      justifyContent: "space-between",
      alignItems: "center",
      width: 300,
      height: 40,
    },
    LogoTitle:{
      fontFamily: 'Hurricane_400Regular',
      fontSize: 80,
      marginBottom: 50
      },
  });

  return(
    <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <Text style={styles.LogoTitle}>Salão da Leide </Text>
      <Input placeholder="Usuário"/>
      <Input placeholder="Senha"/>

      <View style={styles.FirebaseButton}>
        <Button>
          <Text style={styles.textButton}>ENTRAR</Text>
        </Button>
      </View>
    </View>
  )
} 



export default LoginScreen;