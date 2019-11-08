import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, intitialValues }) => {
  const [title, setTitle] = useState(intitialValues.title);
  const [content, setContent] = useState(intitialValues.content);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.textStyle}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.textStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  intitialValues: {
    title: "",
    content: ""
  }
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 20,
    padding: 10,
    fontSize: 18
  }
});
export default BlogPostForm;
