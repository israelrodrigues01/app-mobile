import { View, Text, Image, Pressable, TextInput } from "react-native";

import Title from '../../components/title/index';
import Avatar from '../../components/avatar/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

import { styles } from './style';

export default function Profile() {
    return (
        <View className="flex-1" style={styles.container}>
            <Title title="Perfil" />
            <View className="items-center">
                <Avatar path='https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png' icon='pen' name='Usuário' />
            </View>

            <View className="flex flex-col gap-y-5 mt-5">
                <View>
                    <Input placeholder="Usuário" />
                </View>
                <View>
                    <Input placeholder="usuario@example.com" />
                </View>
                <View>
                    <Input placeholder="Nova senha" />
                </View>
            </View>

            <View className="mt-10">
                <Button text="Atualizar Perfil" />
            </View>
        </View >
    );
}