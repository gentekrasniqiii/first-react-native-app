import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [enteredText, setEnteredText] = useState("");
  const [values, setValues] = useState<string[]>([]); // empty array sepse kan me qen list me shum se nje dmth, typescript po detyron me shenu string

  function inputHandler(enteredText: any) {
    setEnteredText(enteredText);
  }

  function buttonHandler() {
    setValues((currentValues) => [...currentValues, enteredText]);
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 16, fontWeight: 600 }}>Hello First React Native App</Text>

      <View style={styles.row}>
        <TextInput style={styles.inputstyle} placeholder="Your goal" onChangeText={inputHandler} />
        <Button title="Add value" onPress={buttonHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of input values here</Text>
        {values.map((v) => (
          <Text>{v}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyle: {
    borderColor: "black",
    borderWidth: 2,
    marginRight: 4,
  },
  row: {
    marginBottom: 20,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goalsContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
});
