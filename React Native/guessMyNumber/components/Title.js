import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constsnts/colors";

export default function Title({children}) {
    return (
        <View style={styles.title}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: Colors.primary500,
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.primary500,
        textAlign: 'center',
        padding: 12,
    }
})