import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constsnts/colors";


export default function GuessItem({roundNumber, guessNumber}) {
    return(
        <View style={styles.guessContainer}>
            <Text>#{roundNumber}</Text>
            <Text>{guessNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 20,
        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'yellow'
    }
})