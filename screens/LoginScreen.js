import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de inicio de sesión con Firebase

    // Ejemplo:
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso, navegar a la pantalla de inicio, por ejemplo:
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Error");
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Iniciar Sesión</Text>
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
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("Register")} // Navegar a la pantalla de registro
      />
    </View>
  );
};

export default LoginScreen;
