import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import firebase from "firebase"; // Asegúrate de importar Firebase

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Crea una nueva cuenta de usuario en Firebase con el correo y la contraseña ingresados
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro exitoso, actualiza el nombre del usuario
        userCredential.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            // Actualización del nombre exitosa
            console.log("Nombre actualizado correctamente");
            // Navega a la pantalla de inicio o a otra pantalla deseada
            navigation.navigate("Home");
          })
          .catch((error) => {
            // Manejar errores al actualizar el nombre
            console.error("Error al actualizar el nombre", error);
          });
      })
      .catch((error) => {
        // Manejar errores de registro
        Alert.alert(
          "Error",
          "Registro fallido. Verifica tus datos y contraseña."
        );
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Registro</Text>
      <TextInput
        placeholder="Nombre"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Registrarse" onPress={handleRegister} />
      <Button
        title="Volver a Iniciar Sesión"
        onPress={() => navigation.navigate("Login")} // Navegar a la pantalla de inicio de sesión
      />
    </View>
  );
};

export default RegisterScreen;
