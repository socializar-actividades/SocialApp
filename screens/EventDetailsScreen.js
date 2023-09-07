import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, FlatList } from "react-native";
import firebase from "firebase";

const EventDetailsScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [attendees, setAttendees] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    // Carga la lista de asistentes y reseñas desde Firebase, etc.
    firebase
      .firestore()
      .collection("events")
      .doc(event.id)
      .collection("attendees")
      .onSnapshot((snapshot) => {
        const attendeesData = [];
        snapshot.forEach((doc) => {
          attendeesData.push({ id: doc.id, ...doc.data() });
        });
        setAttendees(attendeesData);
      });

    // Cargar las reseñas aca
  }, []);

  const handleToggleAttendance = () => {
    const user = firebase.auth().currentUser;

    if (!user) {
      // El usuario no está registrado
      return;
    }

    const eventId = event.id;

    if (isAttending) {
      // Cancelar la asistencia
      firebase
        .firestore()
        .collection("events")
        .doc(eventId)
        .collection("attendees")
        .doc(user.uid)
        .delete()
        .then(() => {
          setIsAttending(false);
        })
        .catch((error) => {
          console.error("Error al cancelar asistencia", error);
        });
    } else {
      // Confirmar la asistencia
      firebase
        .firestore()
        .collection("events")
        .doc(eventId)
        .collection("attendees")
        .doc(user.uid)
        .set({ name: user.displayName })
        .then(() => {
          setIsAttending(true);
        })
        .catch((error) => {
          console.error("Error al confirmar asistencia", error);
        });
    }
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
      <Button
        title={isAttending ? "Cancelar Asistencia" : "Asistir"}
        onPress={handleToggleAttendance}
      />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Asisten:</Text>
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
