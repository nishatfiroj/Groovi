import React, { useState } from "react"
import Realm from "realm"
import { useApp } from "@realm/react"
import { Input, Button, Text, View } from "native-base"

export default function LoginScreen() {
  //({ navigation, route }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // state values for toggable visibility of features in the UI
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [isInSignUpMode, setIsInSignUpMode] = useState(true)

  const app = useApp()

  // signIn() uses the emailPassword authentication provider to log in
  const signIn = async (email: string, password: string) => {
    const creds = Realm.Credentials.emailPassword(email, password)
    await app.logIn(creds)
  }

  // onPressSignIn() uses the emailPassword authentication provider to log in
  const onPressSignIn = async () => {
    try {
      await signIn(email, password)
    } catch (error) {
      alert(`Failed to sign in: ${error}`)
    }
  }

  // onPressSignUp() registers the user and then calls signIn to log the user in
  const onPressSignUp = async () => {
    try {
      await app.emailPasswordAuth.registerUser({ email, password })
      signIn(email, password)
    } catch (error) {
      alert(`Failed to sign up: ${error}`)
    }
  }

  return (
    <View>
      <Text>Log in to Groovi</Text>
      <Input
        placeholder="email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Input
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry={passwordHidden}
      />
      {isInSignUpMode ? (
        <>
          <Button onPress={onPressSignUp}> Create Account</Button>
          <Button onPress={() => setIsInSignUpMode(!isInSignUpMode)}>
            Already have an account? Log In.
          </Button>
        </>
      ) : (
        <>
          <Button onPress={onPressSignIn}> Log In</Button>
          <Button onPress={() => setIsInSignUpMode(!isInSignUpMode)}>
            Don't have an account? Create Account.
          </Button>
        </>
      )}
    </View>
  )
}
