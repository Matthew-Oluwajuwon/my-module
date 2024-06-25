import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar} />
        <Text
          style={{
            color: "#656565",
          }}
        >
          Merchant name
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            position: "relative",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              position: "absolute",
              top: -10,
              marginRight: 10,
            }}
          >
            N
          </Text>
          5,000.0
        </Text>
        <Text
          style={{
            color: "#FF6D00",
          }}
        >
          buyermail@email.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#006F011A",
    borderRadius: 100,
  },
});

export default Header;
