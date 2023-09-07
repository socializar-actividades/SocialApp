import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase"; // Importa Firebase

const ProfileScreen = () => {
  const user = firebase.auth().currentUser; // Recupera el usuario actual

  return (
    <View>
      <Text>Perfil de Usuario</Text>
      <Text>Nombre: {user.displayName}</Text>
      <Text>Correo Electrónico: {user.email}</Text>
      {/* Agrega más campos de perfil si es necesario */}
      <Button
        title="Editar Perfil"
        onPress={() => {
          /* Implementa la edición del perfil */
        }}
      />
    </View>
  );
};

export default ProfileScreen;
