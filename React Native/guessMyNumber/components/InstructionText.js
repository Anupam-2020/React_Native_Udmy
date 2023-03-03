import { StyleSheet, Text, View } from "react-native";

export default function InstructionText({children, style}) {
    return(
        <View>
            <Text style={[styles.instructionText, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: 'white', 
        fontSize: 20,
        fontFamily: 'open-sans-bold'
    }
});