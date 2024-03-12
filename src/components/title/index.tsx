import { View, Text } from 'react-native';

interface title {
    title: string,
}

export default function Title(props: title) {
    return (
        <View className="title-section mb-10">
            <Text className="text-center">{props.title}</Text>
        </View>
    );
}