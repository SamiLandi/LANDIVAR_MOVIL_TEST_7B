import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type FormButtonProps = TouchableOpacityProps & {
    label: string;
};

export const FormButton = ({ label, style, ...props }: FormButtonProps) => {
    return (
        <TouchableOpacity {...props} style={[styles.button, style]} activeOpacity={0.85}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        flex: 0,
        borderRadius: 8,
        paddingVertical: 10,
        backgroundColor: '#2563eb',
        alignItems: 'center',
        marginTop: 24,
        marginHorizontal: 5,
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});