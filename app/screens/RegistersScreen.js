import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import userApi from "../api/users";
import useAuth from "../auth/useAuth";
import authApii from "../api/auth";
import useApi from "../hooks/useApi";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegistersScreen = () => {
  const auth = useAuth();
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApii.login);
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
        // console.log(result.data.error);
      } else {
        setError("An Unexpected error Occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegistersScreen;

const styles = StyleSheet.create({});
