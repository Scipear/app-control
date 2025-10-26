import { StyleSheet, Text, TextInput, View } from "react-native"


export default function ShortInput({text, type}) {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{text}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputStyle}
                    keyboardType={type}/>
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
        borderRadius: 6,
        width: 140,
        height: 50,
        paddingInlineEnd: 40,
        paddingInlineStart: 10,
    },

    inputStyle: {
        width: '100%',
    }
})