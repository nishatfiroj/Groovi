import React from "react"

import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./src/lib/hooks/useCachedResources"
import useColorScheme from "./src/lib/hooks/useColorScheme"
import Navigation from "./src/navigation"
import { appId, baseUrl } from "./realm.json"

import { NativeBaseProvider, View } from "native-base"

import { AppProvider, UserProvider } from "@realm/react"
import LoginScreen from "./src/screens/login/LoginScreen"

import createRealmContext from "./src/lib/schema/Profile"
import { ActivityIndicator } from "react-native"

const { RealmProvider } = createRealmContext

export const AppWrapper = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AppProvider id={appId} baseUrl={baseUrl}>
        <NativeBaseProvider>
          <UserProvider fallback={LoginScreen}>
            <App />
          </UserProvider>
        </NativeBaseProvider>
      </AppProvider>
    )
  }
}

const App = () => {
  const colorScheme = useColorScheme()

  return (
    <>
      {/* After login, user will be automatically populated in realm configuration */}
      <RealmProvider
        sync={{ flexible: true }}
        fallback={() => (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
      >
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </RealmProvider>
    </>
  )
}
