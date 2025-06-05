import logoImg from "@/assets/images/gunsAndBuns_musclePeach.png";
// import { useState } from "react";
import { router } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  // const [loading, setLoading] = useState(false);

  // sign up
  const goSignUp = () => {
    router.replace({
      pathname: '/signUpScreen'
    });
  };

  // sign in
  const goSignIn = () => {
    router.replace({
      pathname: '/signInScreen'
    });
  };
  
  return (
    <View
      style={ styles.container}
    >
      <Image
        source={logoImg}
        style={ styles.image }
        resizeMode="contain"
      />
      <View style={ styles.buttonContainer }>
        <Pressable style={ styles.button } onPress={goSignIn}>
          <Text style={ styles.buttonText }>Sign In</Text>
        </Pressable>
        <Pressable style={ styles.button } onPress={goSignUp}>
          <Text style={ styles.buttonText }>Sign Up</Text>
        </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center', // horizontal
    justifyContent: 'center', // vertical
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.6,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: -50,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    width: 250,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 26,
    color: 'white',
  },
})
