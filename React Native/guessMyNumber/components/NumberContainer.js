import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constsnts/colors";

const NumberContainer = ({children}) => {
    return(
        <View style={styles.guessContainer}>
            <Text style={styles.textStyling}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    guessContainer: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        margin: 24,
        padding: 24,
        borderRadius: 5,
    },
    textStyling: {
        fontSize: 34,
        textAlign: "center",
        color: Colors.primary500,
        fontWeight: 'bold'
    }
});