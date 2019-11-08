import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import { Context } from "./context/BlogContext";
import BlogPostForm from "./screens/components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      intitialValues={{ title: "", content: "" }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    ></BlogPostForm>
  );
};

export default CreateScreen;
