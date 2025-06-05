import AuthForm from "@/components/authForm";
import auth from '@react-native-firebase/auth';
import { router } from "expo-router";
import { FirebaseError } from 'firebase/app';
import { useState } from "react";
import { ActivityIndicator } from "react-native";

export default function SignUp() {

    // set state for username and email and loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // sign up
    const signUp = async () => {
      setLoading(true)
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        alert('Check your email for confirmation!');
      } catch (e: any) {
        const err = e as FirebaseError;
        alert('Registration Failed: ' + err.message);
      } finally {
        setLoading(false);
      }
  };
  
  return (
    <>
      {loading ? (
        <ActivityIndicator size={"small"} style={{ margin: 28 }} />
      ) : (
        <AuthForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          showConfirmPassword={true}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onSubmit={signUp}
          buttonText="Sign Up"
          footerText="Already have an account?"
          footerButtonText="Sign In"
          onFooterPress={() => {
            router.replace({
              pathname: '/signInScreen'
            });
          }}
        />
      )}
    </>
  );
}