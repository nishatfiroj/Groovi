import React, { useEffect, useState, useRef, useMemo, useCallback } from "react"

import { StyleSheet } from "react-native"

import { Text, View } from "../../lib/components/Themed"
import { RootTabScreenProps } from "../../types"

import createRealmContext from "../../lib/schema/Profile"
import { useUser } from "@realm/react"
import { BSON } from "realm"
import { Button } from "native-base"
import { Overlay } from "react-native-elements"

const { useRealm, useQuery } = createRealmContext

export default function MatchScreen({
  navigation,
}: RootTabScreenProps<"Match">) {
  // const realm = useRealm()
  // const result = useQuery("Profile")
  // const profile = useMemo(() => result, [result])
  // const user = useUser()

  // const [createProfileOverlayVisible, setCreateProfileOverlayVisible] =
  //   useState(false)

  // useEffect(() => {
  //   // initialize the subscriptions
  //   const initSubscription = async () => {
  //     await realm.subscriptions.update((mutableSubs) => {
  //       mutableSubs.add(
  //         realm.objects("Profile").filtered(`owner_id == "${user?.id}"`)
  //       ) // subscribe to all Profiles of the logged in user
  //     })
  //   }
  //   initSubscription()
  // }, [realm, user])

  // const createPrompt = (prompt: string) => {
  //   // if the realm exists, create a task
  //   if (realm) {
  //     realm.write(() => {
  //       realm.create("Task", {
  //         _id: new BSON.ObjectID(),
  //         owner_id: user?.id,
  //         prompt,
  //       })
  //     })
  //   }
  // }

  // // toggleCreateProfileOverlayVisible toggles the visibility of the 'CreateProfilePrompt' Model in the UI
  // const toggleCreateProfileOverlayVisible = () => {
  //   setCreateProfileOverlayVisible(!createProfileOverlayVisible)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match</Text>
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
/*
<Button
        title="+ ADD PROMPT +"
        onPress={toggleCreateProfileOverlayVisible}
      />
      <Overlay
        isVisible={createProfileOverlayVisible}
        onBackdropPress={toggleCreateProfileOverlayVisible}
      >
        {/* <CreateToDoPrompt
          setNewTaskSummary={(value) => {
            toggleCreateToDoOverlayVisible()
            createTask(value)
          }} 
        />
        </Overlay>
*/
