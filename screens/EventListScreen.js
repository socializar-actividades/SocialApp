import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// Datos de ejemplo para la lista de eventos
const eventData = [
  {
    id: "1",
    title: "Salida 1",
    image: require("../assets/images/salida1.jpg"),
    description: "Descripción de la salida 1...",
    date: "2023-09-10",
    location: "Ubicación 1",
  },
  {
    id: "2",
    title: "Salida 2",
    image: require("../assets/images/salida2.jpg"),
    description: "Descripción de la salida 2...",
    date: "2023-09-15",
    location: "Ubicación 2",
  },
  // Agrega más datos de eventos aquí
];

const EventListScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Puedes cargar los datos de eventos desde Firebase u otra fuente aquí
    // Por ahora, usamos los datos de ejemplo eventData
    setEvents(eventData);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("EventDetails", { event: item })} // Navega a la pantalla de detalles del evento
      style={{ borderBottomWidth: 1, padding: 10 }}
    >
      <Text>{item.title}</Text>
      <Text>Fecha: {item.date}</Text>
      <Text>Lugar: {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 20 }}>
        Lista de Eventos
      </Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventListScreen;