import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, FlatList } from "react-native";

const EventDetailsScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [attendees, setAttendees] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Carga la lista de quienes asistieron
    // Carga las reseñas
  }, []);

  const handleAttendEvent = () => {
    // Implementa la lógica para permitir que el usuario asista al evento
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
      <Text>Descripción de la salida: {event.description}</Text>
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
            <Text>Miembro: {item.user}</Text>
            <Text>Calificación de la Salida: {item.rating}</Text>
            <Text>Comentarios: {item.comment}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventDetailsScreen;
