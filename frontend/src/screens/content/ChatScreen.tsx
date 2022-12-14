import React from "react"

import { StyleSheet } from "react-native"

import { Text, View } from "../../lib/components/Themed"

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
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
