import React from 'react';
// IMPORTANTE: Debes importar View y Text desde 'react-native'
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleGroup}>
                { }
                <View style={{ width: 24, height: 24, backgroundColor: 'white' }} />
                <Text style={styles.titleText}>Sistema Vehicular</Text>
            </View>
            <View style={styles.examBadge}>
                <Text style={styles.examText}>Examen</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: '#2563EB',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    titleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    examBadge: {
        backgroundColor: '#1D4ED8',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    // Examen text
    examText: {
        fontSize: 12,
        color: 'white',
    }
});