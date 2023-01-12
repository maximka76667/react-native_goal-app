import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);

  function openAddGoalModal() {
    setIsAddGoalModalOpen(true);
  }

  function closeAddGoalModal() {
    setIsAddGoalModalOpen(false);
  }

  function addGoal(inputGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: inputGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoal(id) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.app}>
        <GoalInput
          onAddGoal={addGoal}
          onCloseModal={closeAddGoalModal}
          isModalVisible={isAddGoalModalOpen}
        />

        <Button title="Add goal" color="purple" onPress={openAddGoalModal} />
        <View style={styles.goalsContainerWrapper}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem onDeleteItem={deleteGoal} item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 50,
    flex: 1,
  },
  goalsContainerWrapper: {
    flex: 9,
    marginTop: 10,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
