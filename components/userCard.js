import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import ChevronRight from "./icons/ChevronRight";
import IDcard from './icons/IDcard';
import Phone from './icons/Phone';
import Location from './icons/Location';
import Email from './icons/Email';
import Historial from './icons/Historial';


export default function UserCard ({userData}){
    const [isExpanded, setExpanded] = useState(false);

    const changeExpansion = () => {
        setExpanded(!isExpanded);
        // Sugerencia: Para animaciones fluidas, podrías usar LayoutAnimation aquí.
    };


    return (
        <View>
            <Pressable 
                style={styles.card}
                onPress={changeExpansion}>
                <Text style={styles.textStyle}>{userData.name}</Text>
    
                <ChevronRight />
            </Pressable>
    
            {isExpanded && (
                <View style={styles.detailsContainer}>
                    <View style={styles.infoGrid}>
                        <View style={styles.rowStyle}>
                            <View style={styles.dataStyle}>
                                <IDcard />
                                <Text style={styles.dataTextStyle}>{userData.ID}</Text>
                            </View>

                            <View style={styles.dataStyle}>
                                <Phone />
                                <Text style={styles.dataTextStyle}>{userData.phoneNumber}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.rowStyle}>
                            <View style={styles.dataStyle}>
                                <Location />
                                <Text style={styles.dataTextStyle}>{userData.address}</Text>
                            </View>

                            <View style={styles.dataStyle}>
                                <Email />
                                <Text style={styles.dataTextStyle}>{userData.email}</Text>
                            </View>
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={styles.dataStyle}>
                                <Historial />
                                <Pressable>
                                    <Text style={styles.historialStyle}>Ver historial de uso</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <Pressable style={styles.editButton}>
                            <Text style={styles.editButtonText}>EDITAR</Text>
                        </Pressable>

                        <Pressable style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>ELIMINAR</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderColor: '#31587A',
        borderTopWidth: 3,
        paddingInlineStart: 15,
        paddingBlock: 10
    },

    textStyle: {
        fontFamily: 'LeagueSpartanBold',
        textAlign: 'left',
        color: '#324766',
        fontSize: 24,

    },
    
    detailsContainer: {
        paddingBlockStart: 10,
        paddingBlockEnd: 15,
    },

    infoGrid: {
        width: '100%',
        paddingInline: 10,
        marginBottom: 35,
        gap: 15,
    },

    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    dataStyle: {
        flexShrink: 1,
        width: '48%',
        gap: 5,
        flexDirection: 'row',
    },

    dataTextStyle: {
        flexShrink: 1,
        fontFamily: 'LeagueSpartan',
        textAlign: 'left',
        fontSize: 16,
        color: '#324766',
    },

    historialStyle: {
        fontFamily: 'LeagueSpartan',
        color: '#324766',
        fontSize: 16,
        borderBottomColor: '#324766',
        borderBottomWidth: 2,
        paddingBottom: 3,
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },

    editButton: {
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#1D3557',
        paddingInline: 33,
        paddingBlock: 8,
    },

    editButtonText: {
        fontFamily: 'LeagueSpartanBold',
        fontSize: 16,
    },

    deleteButton: {
        backgroundColor: '#E93E3B',
        borderRadius: 6,
        paddingInline: 25,
        paddingBlock: 10,
    },

    deleteButtonText: {
        fontFamily: 'LeagueSpartanBold',
        fontSize: 16,
        color: '#fff'
    }
})