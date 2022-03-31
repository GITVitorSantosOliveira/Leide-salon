import { View,Text,StyleSheet,Image } from "react-native";
import { Hurricane_400Regular, useFonts } from "@expo-google-fonts/hurricane";
import AppLoading from 'expo-app-loading';
import Button from '../../components/Button/'
const InitialScreen =()=>{
  let [fontsLoaded] = useFonts({
    Hurricane_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    LogoTitle:{
    fontFamily: 'Hurricane_400Regular',
    fontSize: 80,
    marginBottom: 50
    },
    textButtons:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    },
    viewButtons:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewFirebaseButton:{
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: '#ffff',
      width: 320,
      height: 40,
      borderRadius: 25
    }
  });

  return(
    <View style={styles.Container}>
      <Text style={styles.LogoTitle}>Salão da Leide </Text>

          <View style={styles.viewButtons}>
              <Button >
                <Text style={styles.textButtons}>Login</Text>
              </Button>

              <Button>
                <Text style={styles.textButtons}>Cadastre-se</Text>
              </Button>

          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Ou</Text>

              <View style={styles.viewFirebaseButton}>
                  <Image
                    source={require('../../assets/google-icon2.png')}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cadastrar-se com o Google </Text>
              </View>
          </View>

    </View>
  )
} 

export default InitialScreen;
