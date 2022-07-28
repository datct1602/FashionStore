import { StyleSheet, Text, View, TextInput, Pressable, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const Register = (props) => {
  const { navigation } = props;
  const { onRegister } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const register = async () => {
    if (confirm_password != password) {
      Alert.alert(
        "Regsiter Failed !",
        "Password does not match !",
        [
          {
            text: "Cancel",
            style: 'cancel',
          }
        ]

      );
    }
    const res = await onRegister(username, password, confirm_password);
    console.log("Error : ", res)
    if (res == true) {
      navigation.navigate('Login')
    }
    else {
     
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.viewBody}>
        <View>
          <Text style={styles.textRegister}>Register</Text>
        </View>
        <View style={styles.viewLogin}>
          <TextInput style={styles.inputLogin} value={username} onChangeText={setUsername} placeholder='Username'></TextInput>
          <TextInput style={styles.inputLogin} value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry></TextInput>
          <TextInput style={styles.inputLogin} value={confirm_password} onChangeText={setConfirm_password} placeholder='Password' secureTextEntry></TextInput>
          <Pressable style={styles.buttonLogin} onPress={register}><Text style={styles.textButtonLogin}>REGISTER</Text></Pressable>
        </View>
        <View>
          <Text style={styles.textLogin} onPress={() => navigation.navigate('Login')}>BACK</Text>
        </View>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Register

const styles = StyleSheet.create({
  viewBody: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewLogin: {
    width: '100%',
    height: 295,
    paddingHorizontal: 30
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

  textRegister: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  textLogin: {
    fontSize: 12,
    fontWeight: 'bold'
  },

})