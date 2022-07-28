import { StyleSheet, Text, View, TextInput, Pressable, Image, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Platform } from 'react-native-web';


const Login = (props) => {
  const { navigation } = props;
  const { onLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!username || !password || username.trim().length == 0 ||
      password.trim().length == 0) {
        Alert.alert(
          "Login Failed !",
          "Do not leave the username and password blank",
          [
            {
              text: "Cancel",
              style: 'cancel',
            }
          ]
  
        );
      return;
    }
    const res = await onLogin(username, password);
    if (res == false) {
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.viewBody}>

        <View style={styles.viewBanner}>
          <Image style={styles.imgBanner} source={require('../../../images/background_Login.webp')}></Image>
        </View>

        <View style={styles.viewIcon}>
          <Image style={styles.imgIcon} source={require("../../../images/nikeIcon.png")}></Image>
        </View>

        <View style={styles.viewSlogan}>
          <Text style={styles.textSlogan}>
            Nike continues to use the tagline across much of its advertising and branding today. “'Just Do It' is still as relevant to us as a brand today as it was 23 years ago,” says Davide Grasso, VP of global brand marketing at Nike.
          </Text>
        </View>

        <View style={styles.viewLogin}>
          <TextInput style={styles.inputLogin} value={username} onChangeText={setUsername} placeholder='Email'></TextInput>
          <TextInput style={styles.inputLogin} value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry></TextInput>
          <Pressable style={styles.buttonLogin} onPress={login}><Text style={styles.textButtonLogin}>LOGIN</Text></Pressable>
        </View>

        <View style={styles.viewRegister}>
          <Text style={styles.textQuestion} >You don't have an Acoount ?</Text>
          <Text style={styles.textRegister} onPress={() => navigation.navigate('Register')}> Register</Text>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  viewBody: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewBanner: {
    width: '100%',
    height: 200,
    paddingHorizontal: 20
  },

  viewIcon: {
    width: 75,
    height: 75
  },
  viewSlogan: {
    width: '100%',
    height: 70,
    paddingHorizontal: 30,

  },
  viewLogin: {
    width: '100%',
    height: 210,
    paddingHorizontal: 30
  },
  viewRegister: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  imgBanner: {
    width: '100%',
    height: '100%'
  },

  imgIcon: {
    width: '100%',
    height: '100%'
  },

  textSlogan: {
    fontSize: 12,
    textAlign: 'center',
    color: '#323232',
  },

  inputLogin: {
    width: '100%',
    height: 50,
    backgroundColor: "#FEFEFE",
    marginTop: 20,
    borderRadius: 5,
    paddingLeft: 20
  },

  buttonLogin: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5
  },

  textButtonLogin: {
    color: 'white',
    fontWeight: "bold"
  },

  textQuestion: {
    color: 'black',
    fontSize: 12,
    color: '#323232'
  },

  textRegister: {
    fontSize: 12,
    fontWeight: 'bold'
  },
})