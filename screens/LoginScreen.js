import { useState } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView,
} from "react-native";

import background from "../assets/background.jpg";

export default LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.mainBox}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.passwordInputBtn}>
                <Text style={styles.showPassText}>
                  {" "}
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.btnSignup}
            onPress={() => {
              console.log("btnSignup");
            }}>
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSignupText} onPress={() => {}}>
            <Text style={styles.btnSignupText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  mainBox: {
    width: "100%",
    // height: 549,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
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
  passwordInputBtn: {
    height: 50,
    width: 100,
    position: "absolute",
    top: 16,
    right: 0,
    textAlign: "center",
    alignItems: "center",
    color: "#000",
  },
  showPassText: {
    fontSize: 16,
    color: "#1B4371",
    alignItems: "center",
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
    fontFamily: "Roboto-Regular",
  },
  btnSignupText: {
    paddingTop: 16,
    color: "#1B4371",
    fontSize: 16,
  },
});
