import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Image,
} from "react-native";

import background from "../assets/background.jpg";
import avatar from "../assets/defaultAvatar.png";
import addBtn from "../assets/addBtn.png";

export default RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.mainBox}>
          <View style={styles.avatarBox}>
            <Image source={avatar} style={styles.avatar} />
            <Image source={addBtn} style={styles.addBtn} />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry
          />
          <TouchableOpacity style={styles.btnSignup} onPress={() => {}}>
            <Text style={styles.btnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin} onPress={() => {}}>
            <Text style={styles.btnLogin}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  mainBox: {
    width: "100%",
    height: 549,
    paddingTop: 70,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  avatarBox: {
    position: "absolute",
    left: "50%",
    top: "-2%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    shadowColor: "black",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  addBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: 343,
    height: 50,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
  },
  btnSignup: {
    marginTop: 42,
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  btnText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  btnLogin: {
    paddingTop: 16,
    color: "#1B4371",
    fontSize: 16,
  },
});
