import { StyleSheet, Text, TextInput, View } from "react-native";
import Searching from "./icons/Searching";


export default function SearchBar({text}) {
    return(
        <View style={styles.containerStyle}>
            <View style={styles.inputContainer}>
                <Searching />
                <TextInput
                    style={styles.inputStyle}
                    placeholder={text}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBlockStart: 10,
    },

    textStyle: {
        fontFamily: 'LeagueSpartanBold',
        fontSize: 16,
        paddingInlineStart: 5,
        paddingBlockEnd: 5,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 200,
        width: '100%',
        height: 50,
        paddingInlineEnd: 40,
        paddingInlineStart: 10,
        gap: 10,
    },

    inputStyle: {
        width: '100%',
    }
})

