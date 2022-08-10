import * as React from "react"
import { Button, Alert, VStack, Text } from "native-base"
import { useUser } from "@realm/react"

export function LogoutButton() {
  const user = useUser()
  // The signOut function calls the logOut function on the currently
  // logged in user and then navigates to the welcome screen
  const signOut = () => {
    if (user) {
      user.logOut()
    }
  }

  return (
    <Button
      title="Log Out"
      onPress={() => {
        return (
          <Alert>
            <VStack space={2} flexShrink={1} w="100%">
              <Text fontSize="md" fontWeight="medium">
                Log out
              </Text>
              <Button onPress={signOut}>Yes, log out.</Button>
            </VStack>
          </Alert>
        )
      }}
    />
  )
}
