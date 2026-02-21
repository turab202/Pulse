import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { View, Text, ActivityIndicator } from "react-native";

export default function SSOCallback() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Small delay to ensure navigation is ready
      setTimeout(() => {
        router.replace("/(tabs)");
      }, 100);
    }
  }, [isLoaded, isSignedIn]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0D0D0F" }}>
      <ActivityIndicator size="large" color="#F4A261" />
      <Text style={{ color: "#FFFFFF", marginTop: 10, fontSize: 16 }}>
        Completing sign in...
      </Text>
    </View>
  );
}
