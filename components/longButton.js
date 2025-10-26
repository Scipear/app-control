import { Pressable, StyleSheet, Text} from "react-native";


export default function LongButton({text},) {
    return(
        <Pressable
            style={({pressed}) => [
                    {
                        opacity: pressed ? 0.7 : 1,
                    },
                styles.buttonStyle]}>
            <Text style={styles.textStyle}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: '#1D3557',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 50,
        marginBlockStart: 50
    },

    textStyle:{
        fontFamily: 'LeagueSpartanBold',
        fontSize: 20,
        color: '#fff'
    },
})