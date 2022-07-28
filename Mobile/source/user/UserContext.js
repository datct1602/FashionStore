import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext } from 'react';
import { login, register } from './UserService';
import constans from '../utils/constans';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false);

    const onLogin = async (username, password) => {
        try {
            const result = await login(username, password);
            if (result && result.token) {
                await AsyncStorage.setItem(constans.STORAGE_KEY, result.token);
                setIsLogin(true);
                return true;
            }
        } catch (error) {
            setIsLogin(false);
            console.log("Login Failed : ", error)
        }
    }


    const onRegister = async (username, password, confirm_password) => {
        try {
            const res = await register(username, password, confirm_password);
            console.log(res)
            return res.status;
        } catch (error) {
            console.log('Register Failed : ', error)
        }
    }

    return (
        <UserContext.Provider
            value={{
                onLogin, onRegister, isLogin,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext