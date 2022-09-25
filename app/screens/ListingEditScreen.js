import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
// import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"), //Images Field required
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "mirror" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "orange", icon: "cards" },
  { label: "Cars", value: 5, backgroundColor: "lightblue", icon: "car" },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "lightgreen",
    icon: "football",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "pink",
    icon: "music",
  },
  { label: "Books", value: 8, backgroundColor: "purple", icon: "book" },
  { label: "Other", value: 9, backgroundColor: "grey", icon: "more" },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLenght={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLenght={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLenght={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
