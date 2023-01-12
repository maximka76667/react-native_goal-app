import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        onPress={() => onDeleteItem(item.id)}
      >
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#55d",
    borderRadius: 8,
  },
  goalItemText: {
    paddingHorizontal: 15,
    color: "white",
    paddingVertical: 10,
  },
});
