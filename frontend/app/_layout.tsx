import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();


  useEffect(() => {
    // callback so we know when state changes on sign in
    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
      console.log('onAuthStateChanged', user);
      setUser(user);
      if (initializing) setInitializing(false);
    };
  
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  useEffect(() => {
    // if initializing return early
    if(initializing) return;

    //check if user is trying to navigate in (auth)
    const inAuthGroup = segments[0] === '(auth)';

    // user logged in background
    if (user && !inAuthGroup) { 
      router.replace({
        pathname: "/(auth)/Home"
      });

    // user not logged in route back to login
    } else if (!user && inAuthGroup) { 
      router.replace({
        pathname: "/"
      });
    }
  }, [user, initializing])

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="signInScreen" options={{ title:"Sign In" }}/>
      <Stack.Screen name="signUpScreen" options={{ title:"Sign Up" }}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
    </Stack>
  );
}
