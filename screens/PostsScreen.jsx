import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import avatar from "../assets/avatar.png";

import addPostBtn from "../assets/addPostBtn.png";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.logoutIcon}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.userWrapper}>
        <Image source={avatar} style={styles.avatarImage} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarWrapper}>
          <Feather name="grid" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <AntDesign
            style={styles.plusIcon}
            name="plus"
            size={24}
            color="white"
          /> */}
          <Image source={addPostBtn} style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  header: {
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    marginBottom: 16,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logoutIcon: {
    marginLeft: "auto",
  },
  userWrapper: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 32,
    gap: 8,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "red",
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Medium",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121CC",
  },

  tabBar: {
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 90,
    paddingVertical: 12,
    paddingBottom: 34,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  plusIcon: {
    // backgroundColor: "#FF6C00",
    // paddingTop: 10,
    // paddingHorizontal: 30,
    // borderRadius: 100,
  },
});

export default PostsScreen;
