import { useState } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import background from "../assets/background.jpg";
import avatar from "../assets/defaultAvatar.png";
import addBtn from "../assets/addBtn.png";

export default RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Логін:", login);
    console.log("Email:", email);
    console.log("Пароль:", password);
  };

  return (
    <ImageBackground source={background} style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.screenWrapper}
            keyboardVerticalOffset={-180}>
            <View style={styles.mainBox}>
              <View style={styles.avatarBox}>
                <Image source={avatar} style={styles.avatar} />
                <Image source={addBtn} style={styles.addBtn} />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <View style={styles.passInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
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
            </View>
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnSignup} onPress={handleSignup}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin} onPress={() => {}}>
              <Text style={styles.btnLogin}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, width: "100%", justifyContent: "flex-end" },
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
    height: 550,
    paddingHorizontal: 16,
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
    paddingTop: 92,
    fontSize: 30,
    marginBottom: 32,
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
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 78,
    alignItems: "center",
  },
  btnSignup: {
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
