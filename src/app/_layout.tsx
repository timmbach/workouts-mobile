import "../global.css";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function Layout() {
  const colorScheme = useColorScheme();
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ThemeProvider value={colorScheme == "dark" ? DarkTheme : DefaultTheme}>
        <Slot />
        {/* <StatusBar barStyle="default" /> */}
      </ThemeProvider>
    </ClerkProvider>
  );
}
