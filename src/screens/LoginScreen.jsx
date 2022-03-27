import { View,Text,StyleSheet,Image } from "react-native";
import Input from "../components/Input";
import UserIcon from '@expo/vector-icons/EvilIcons'
const LoginScreen =()=>{
  const styles = StyleSheet.create({
    text: {
      fontWeight: "bold",
      fontSize: 16,
    },
    FirebaseButton:{
      justifyContent: "space-between",
      alignItems: "center",
      width: 300,
      height: 40,

    }
  });

  return(
    <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <UserIcon name="user" size={200} />
      <Input placeholder="Usuário"/>
      <Input placeholder="Senha"/>
      <Text style={styles.text}>Ou</Text>

      <View style={styles.FirebaseButton}>
      <Image
        source={require('../assets/google-icon2.png')}
        style={{ width: 30, height: 30 }}
      />
      <Text>Fazer Login Com O Google</Text>
      </View>
    </View>
  )
} 



export default LoginScreen;