import { View, Text } from "react-native";

import { styles } from './style'

interface info {
    text: string,
}

export default function TitleIndex(props: info) {
    return (
        <View style={styles.titleInfoContent}>
            <Text style={styles.titleInfoBefore}></Text>
            <Text className="text-center" style={styles.titleInfo}>{props.text}</Text>
        </View>
    );
}