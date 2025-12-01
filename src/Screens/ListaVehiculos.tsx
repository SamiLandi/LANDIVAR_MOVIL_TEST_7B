import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { VehiculoContext } from "../context/Vehiculocontext";

export default function ListaVehiculos({ navigation }: any) {
    const { vehiculos } = useContext(VehiculoContext);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Vehículos registrados
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10,
                }}
            >
                <Text>Placa</Text>
                <Text>Dueño</Text>
                <Text>Marca</Text>
                <Text>Modelo</Text>
            </View>

            <FlatList
                data={vehiculos}
                keyExtractor={(item) => item.placa}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: 5,
                        }}
                    >
                        <Text>{item.placa}</Text>
                        <Text>{item.duenio}</Text>
                        <Text>{item.marca}</Text>
                        <Text>{item.modelo}</Text>
                    </View>
                )}
            />

            <Button
                title="Registrar otro"
                onPress={() => navigation.replace("Paso1")}
            />
        </View>
    );
}
