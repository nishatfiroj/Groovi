import { Input } from "native-base"
import React, { useState } from "react"

import { Button, StyleSheet } from "react-native"

import { Text, View } from "../../lib/components/Themed"

export default function ProfileScreen(props: { setNewPrompt: any }) {
  const { setNewPrompt } = props
  const [prompt, setPrompt] = useState<string>("")

  return (
    <View>
      <Text>Add Prompt</Text>
      {/* <Input
        placeholder="New Prompt"
        onChangeText={(e) => setPrompt(e as string)}
      />
      <Button title="Save" onPress={() => setNewPrompt(prompt)} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
})
