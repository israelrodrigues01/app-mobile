import React from "react";
import { View, Text, Image } from "react-native";

import Input from '../../components/login/input/index';
import Button from '../../components/login/button/index';

import { styles } from './style';

export default function Register() {
    return (
        <View className='flex-1 justify-center gap-y-10' style={styles.container}>
            <View className="items-center">
                <Image source={require('../../assets/img/logo-lg.png')} />
            </View>

            <View className="flex flex-col gap-5">
                <View><Input placeholder="Nome" /></View>
                <View><Input placeholder="Email" /></View>
                <View><Input placeholder="Senha" /></View>
            </View>

            <View className="flex flex-col gap-5">
                <View><Button label="Criar Usuário" color="white" /></View>
                <View><Button label="Entrar" color="color" /></View>
            </View>
        </View>
    )
}