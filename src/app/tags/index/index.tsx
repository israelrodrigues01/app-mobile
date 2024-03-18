import { useState } from "react";
import { View, Text, Image, Pressable, TextInput, ScrollView } from "react-native";

import ColorPicker from 'react-native-wheel-color-picker'

import Title from '../../../components/title/index';
import Avatar from '../../../components/avatar/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import TitleInfo from '../../../components/titleInfo/index';
import StateButton from '../../../components/stateButton/index'

import { styles } from './style';


export default function Tag() {

    const [tag, setTag] = useState('');
    const [color, setColor] = useState('');

    const handleChangeText = (text: string) => {
        setTag(text);
        text.length < 1 ? clearColor() : null;
    };

    const clearColor = () => {
        setColor('');
    }

    return (
        <ScrollView className="flex-1" style={styles.container}>
            <Title title="Minhas Tags" />
            <View className="items-center">
                <Avatar path='https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png' icon='pen' name='Usuário' />
            </View>

            <View className="flex flex-col gap-y-5 mt-5">
                <View>
                    <Input placeholder="Nome da prioridade" onChangeText={handleChangeText} />
                </View>
                <View className="h-[75]">
                    <ColorPicker discrete={false} wheelHidden={true} onColorChangeComplete={setColor} />
                </View>
                <View className="mb-5">
                    {
                        tag ? <StateButton text={tag} color={color} /> : null
                    }
                </View>
                <View className="mb-5">
                    <Button text="Adicionar Tag" />
                </View>
                <View className="mt-10">
                    <TitleInfo text="Tags" />
                    <View className="flex flex-row flex-wrap gap-5 mt-1">
                        <View>
                            <StateButton text="Escola" color="#57D41C" />
                        </View>
                        <View>
                            <StateButton text="Documentação" color="#1C45D4" />
                        </View>
                        <View>
                            <StateButton text="Projeto" color="#3979C5" />
                        </View>
                        <View>
                            <StateButton text="Desenvolvimento" color="#F9763E" />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}