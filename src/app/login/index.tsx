import React from "react";
import { View, Text, Image } from "react-native";

import Input from '../../components/login/input/index';
import Button from '../../components/login/button/index';

import { styles } from './style';

export default function Login() {
    const [user, setUser] = React.useState('')

    return (
        <View className='flex-1 gap-y-10' style={styles.container}>
            <View className="items-center">
                <Image source={require('../../assets/img/logo-lg.png')} />
            </View>

            <View className="flex flex-col gap-5">
                <View><Input placeholder="Email" /></View>
                <View><Input placeholder="Senha" /></View>
            </View>

            <View className="flex flex-col gap-5">
                <View><Button label="Cadastre-se" color="white" /></View>
                <View><Button label="Entrar" color="blue" /></View>
            </View>
        </View>
    )
}