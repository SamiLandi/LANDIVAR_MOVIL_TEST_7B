import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Paso2({ navigation, route }: any) {
    const { marca, modelo } = route.params;

    const [placa, setPlaca] = useState("");
    const [duenio, setDuenio] = useState("");
    const [anio, setAnio] = useState("");
    const [gasolina, setGasolina] = useState("");

    const continuar = () => {
        if (!placa || !duenio || !anio || !gasolina) {
            alert("Completa todos los campos");
            return;
        }

        navigation.navigate("Paso3", {
            marca,
            modelo,
            placa,
            duenio,
            anio,
            gasolina,
        });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Registro de un vehículo – Paso 2 de 3
            </Text>

            <Text>Placa:</Text>
            <TextInput style={{ borderWidth: 1 }} value={placa} onChangeText={setPlaca} />

            <Text>Nombre del dueño:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                value={duenio}
                onChangeText={setDuenio}
            />

            <Text>Año:</Text>
            <TextInput style={{ borderWidth: 1 }} value={anio} onChangeText={setAnio} />

            <Text>Tipo de gasolina:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={gasolina}
                onChangeText={setGasolina}
            />

            <Button title="Regresar" onPress={() => navigation.goBack()} />
            <Button title="Continuar" onPress={continuar} />
        </View>
    );
}
