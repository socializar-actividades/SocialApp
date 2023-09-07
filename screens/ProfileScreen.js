import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase";

const ProfileScreen = () => {
  const user = firebase.auth().currentUser; // Trae el usuario actual

  return (
    <View>
      <Text>Perfil de Usuario</Text>
      <Text>Nombre: {user.displayName}</Text>
      <Text>Correo Electrónico: {user.email}</Text>
      {/* Más campos de perfil a detallar*/}
      <Button
        title="Editar Perfil"
        onPress={() => {
          /* Implementar la edición del perfil */
        }}
      />
    </View>
  );
};

export default ProfileScreen;
