import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import Header from "../components/header";
import OptionCard from "../components/optionCard";

export default function Home() {
    return(
        <View style={styles.container}>
            <Header 
                text="BIENVENIDO"/>

            <View style={styles.cardsContainer}>
                <OptionCard 
                    text="AGREGAR USUARIO"
                    route="/AddUser"/>

                <OptionCard 
                    text="GESTIONAR USUARIOS"
                    route="/ManageUsers"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBlockStart: Constants.statusBarHeight,
    },

    cardsContainer: {
        alignItems: 'center',
        paddingInline: 40,
        marginBlockStart: 100,
        gap: 40,
        zIndex: 2,
    },
})