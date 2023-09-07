import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";

//Idea aproximada del diseño del homepage

const HomeScreen = ({ navigation }) => {
  // Datos de salida por CMS
  const carouselData = [
    {
      title: "Salida 1",
      image: require("../assets/images/salida1.jpg"),
      description: "Descripción de la salida 1...",
      date: "2023-09-10",
      location: "Ubicación 1",
    },
    {
      title: "Salida 2",
      image: require("../assets/images/salida2.jpg"),
      description: "Descripción de la salida 2...",
      date: "2023-09-15",
      location: "Ubicación 2",
    },
    // etc
  ];

  // Renderiza cada tarjeta en el carrusel
  const renderCardItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20,
          marginHorizontal: 10,
        }}
      >
        <Text>{item.title}</Text>
        <Image
          source={item.image}
          style={{
            width: 200,
            height: 150,
            resizeMode: "cover",
            marginVertical: 10,
          }}
        />
        <Text>{item.description}</Text>
        <Text>Fecha: {item.date}</Text>
        <Text>Lugar: {item.location}</Text>
        <Button
          title="Ver Detalles"
          onPress={() => navigation.navigate("EventDetails", { event: item })}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 20 }}>
        Bienvenido a Socializar!
      </Text>
      <Carousel
        data={carouselData}
        renderItem={renderCardItem}
        sliderWidth={300}
        itemWidth={250}
      />
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("Register")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
