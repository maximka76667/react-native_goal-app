import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import icon from "../assets/icon.png";

const GoalInput = ({ onAddGoal, onCloseModal, isModalVisible }) => {
  const [inputGoal, setInputGoal] = useState("");

  function handleInputGoalChange(text) {
    setInputGoal(text);
  }

  function handleGoalAdd() {
    onAddGoal(inputGoal);
    setInputGoal("");
    onCloseModal();
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={icon}
        />
        <TextInput
          onChangeText={handleInputGoalChange}
          style={styles.input}
          placeholder="Your goal..."
          value={inputGoal}
          placeholderTextColor="#999"
        />
        <View style={{ flexDirection: "row" }}>
          <Button title="Add goal" onPress={handleGoalAdd} />
          <Button title="Close" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    width: "75%",
    margin: 16,
    paddingLeft: 16,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
