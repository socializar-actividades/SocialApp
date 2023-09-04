import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  // Supongamos que estas son tus noticias obtenidas de una API externa (CMS)
  const noticias = [
    {
      id: 1,
      titulo: "Título de la Noticia 1",
      contenido: "Contenido de la Noticia 1",
      imagen: "url_de_la_imagen_1.jpg",
    },
    {
      id: 2,
      titulo: "Título de la Noticia 2",
      contenido: "Contenido de la Noticia 2",
      imagen: "url_de_la_imagen_2.jpg",
    },
    // Puedes agregar más noticias aquí
  ];

  return (
    <View style={styles.container}>
      {/* Encabezado de Noticias */}
      <Text style={styles.newsHeader}>Últimas Noticias</Text>

      {/* Carrusel de Noticias */}
      <ScrollView horizontal={true} style={styles.newsCarousel}>
        {noticias.map((noticia) => (
          <View key={noticia.id} style={styles.newsCard}>
            <Image source={{ uri: noticia.imagen }} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{noticia.titulo}</Text>
            <Text style={styles.newsContent}>{noticia.contenido}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Botones de Login y SignUp */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue", // Fondo azul
    alignItems: "center",
    justifyContent: "flex-start", // Contenido arriba
    padding: 20,
  },
  newsHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // Texto blanco
    marginBottom: 20,
  },
  newsCarousel: {
    flex: 1,
    width: "100%",
  },
  newsCard: {
    backgroundColor: "white", // Fondo blanco
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    width: 300, // Ancho fijo de cada tarjeta
  },
  newsImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  newsContent: {
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white", // Fondo blanco
    padding: 10,
    borderRadius: 5,
    width: "45%", // Ancho fijo de los botones
    alignItems: "center",
  },
  buttonText: {
    color: "blue", // Texto azul
    fontWeight: "bold",
  },
});
