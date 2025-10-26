import { Link } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"


export default function OptionCard({text, route}) {
    return (
        <Link asChild href={route}>
            <Pressable style={styles.cardStyle}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{text}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        width: '100%',
        height: 170,
        backgroundColor: '#31587A',
        borderColor: '#31587A',
        borderWidth: 3,
        borderRadius: 8,
    },

    titleContainer: {
        backgroundColor: '#fff',
        paddingInlineStart: 10,
        paddingBlock: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    titleStyle: {
        fontFamily: 'LeagueSpartanBold',
        color: '#324766',
        fontSize: 24,
    },
})