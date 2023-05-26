import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./context/AuthProvider";
import Routes from "./routes/routes";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <NavigationContainer>
      <ExpoStatusBar style="light" backgroundColor="#00635B" />

      <StatusBar
        barStyle={Platform.select({
          ios: "light-content",
          android: "default",
        })}
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
