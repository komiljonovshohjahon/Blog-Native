import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContext] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContext(text)}
      />
      <Button
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
        title="Add Blog Post"
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
    padding: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
  },
});
