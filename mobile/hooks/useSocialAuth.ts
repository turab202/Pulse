import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useAuth, useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

function useAuthSocial() {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    if (loadingStrategy) return; // prevent concurrent logins
    setLoadingStrategy(strategy);

    try {
      // Start the SSO flow
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (!createdSessionId || !setActive) {
        const provider = strategy === "oauth_google" ? "Google" : "Apple";
        Alert.alert(
          "Sign-in incomplete",
          `${provider} sign-in did not complete. Please try again.`
        );
        return;
      }

      // Activate the session manually
      await setActive({ session: createdSessionId });

      // Redirect immediately after successful login
      router.replace("/(tabs)");
    } catch (error) {
      console.log("💥 Error in social auth:", error);
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      Alert.alert("Error", `Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setLoadingStrategy(null);
    }
  };

  // Optional: if user is already signed in, redirect automatically
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn]);

  return { handleSocialAuth, loadingStrategy };
}

export default useAuthSocial;
