import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, FlatList } from "react-native";

const EventDetailsScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [attendees, setAttendees] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Simula la carga de la lista de asistentes y reseñas desde Firebase u otra fuente
  useEffect(() => {
    // Carga la lista de asistentes aquí
    // Carga las reseñas aquí
  }, []);

  const handleAttendEvent = () => {
    // Implementa la lógica para permitir que el usuario asista al evento
    // Esto podría implicar actualizar los datos en Firebase
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>{event.title}</Text>
      <Image
        source={event.image}
        style={{
          width: 200,
          height: 150,
          resizeMode: "cover",
          marginVertical: 10,
        }}
      />
      <Text>Descripción: {event.description}</Text>
      <Text>Fecha: {event.date}</Text>
      <Text>Lugar: {event.location}</Text>
      <Button title="Asistir" onPress={handleAttendEvent} />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Asistentes:</Text>
      <FlatList
        data={attendees}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Reseñas:</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginVertical: 5,
            }}
          >
            <Text>Usuario: {item.user}</Text>
            <Text>Calificación: {item.rating}</Text>
            <Text>Comentario: {item.comment}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventDetailsScreen;
