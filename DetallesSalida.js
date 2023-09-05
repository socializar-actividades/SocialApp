import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function DetallesSalida({ route }) {
  const { titulo, imagen, descripcion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.descripcion}>{descripcion}</Text>
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.botonTexto}>Me Anoto!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
