import { StyleSheet, Text, View } from "react-native"
import LogOut from "./icons/LogOut"
import { Link } from "expo-router"


export default function Header({text}){
    return(
        <View>
            <View style={styles.firstShapeContainer}>
                <View style={styles.blueShape}>
                    <Text style={styles.headerText}>{text}</Text>
                </View>
                <View style={styles.whiteShape}>
                </View>

                <View style={styles.iconContainer}>
                    <Link asChild href="/">
                        <LogOut />
                    </Link>
                </View>
            </View>

            <View style={styles.blueShape}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstShapeContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInlineEnd: 25,
        marginBlockEnd: 15
    },

    headerText:{
        fontFamily: 'LeagueSpartanBold',
        color: '#fff',
        fontSize: 20,
    },

    blueShape: {
        justifyContent: 'center',
        backgroundColor: '#31587A',
        width: '100%',
        height: 42,
        paddingInlineStart: 20,
        zIndex: 0,
    },
    
    whiteShape: {
        position: 'absolute',
        top: 50,
        left: -320,
        width: 1080,
        height: 300,
        backgroundColor: '#fff',
        transform: [{ skewY: '-45deg' }],
        zIndex: 1,
    },

    iconContainer: {
        position: 'absolute',
        right: 25,
        zIndex: 2,
    }
})