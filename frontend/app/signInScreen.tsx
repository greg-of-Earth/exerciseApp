import AuthForm from "@/components/authForm";
import auth from '@react-native-firebase/auth';
import { router } from "expo-router";
import { FirebaseError } from 'firebase/app';
import { useState } from "react";
import { ActivityIndicator } from "react-native";

export default function SignIn() {

    // set state for username and email and loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // sign in
    const signIn = async () => {
        setLoading(true)
        try {
          await auth().signInWithEmailAndPassword(email, password);
        } catch (e: any) {
          const err = e as FirebaseError;
          alert('Sign in Failed: ' + err.message);
        } finally {
          setLoading(false);
        }
    };
    return (
        <>
            {loading ? (
            <ActivityIndicator size={'small'} style={{ margin: 28 }}/>
                ) : (
                <AuthForm
                    email={email}
                    password={password}
                    onEmailChange={setEmail}
                    onPasswordChange={setPassword}
                    onSubmit={signIn}
                    buttonText="Sign In"
                    footerText="Don't have an account?"
                    footerButtonText="Sign Up"
                    onFooterPress={() => {
                        router.replace({
                            pathname: "/signUpScreen"
                        });
                    }}
                />
            )}
        </>
  );
}
