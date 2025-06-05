import React from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";

type AuthFormProps = {
    email: string;
    password: string;
    confirmPassword?: string;
    showConfirmPassword?: boolean;
    onEmailChange: (val: string) => void;
    onPasswordChange: (val: string) => void;
    onConfirmPasswordChange?: (val: string) => void;
    onSubmit: () => void;
    buttonText: string;
    footerText?: string;
    footerButtonText?: string;
    onFooterPress?: () => void;
};

export default function AuthForm({
    // destructure props
    email,
    password,
    confirmPassword,
    showConfirmPassword,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
    buttonText,
    footerText,
    footerButtonText,
    onFooterPress,
}: AuthFormProps) {
    // return the form 
    return (
        <View style={ styles.container }>
        {/* dont cover fields with keyboard */}
        <KeyboardAvoidingView behavior="padding">
            <TextInput
                style={[styles.input, {marginBottom: 20}]}
                value={ email }
                onChangeText={ onEmailChange }
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor='grey'
            />
            <TextInput
                style={styles.input}
                value={ password }
                onChangeText={ onPasswordChange }
                secureTextEntry
                placeholder="Password"
                placeholderTextColor='grey'
            />
            {showConfirmPassword && onConfirmPasswordChange && (
                <TextInput
                style={styles.input}
                value={ confirmPassword }
                onChangeText={ onConfirmPasswordChange }
                secureTextEntry
                placeholder="Confirm Password"
                placeholderTextColor='grey'
            />
            )}
            <View style={{ marginTop: 20}}>
                <Button onPress={onSubmit} title={buttonText}/>
                {footerText && onFooterPress && (
                    <>
                        <Text style={ styles.text }>{footerText}</Text>
                        <Button onPress={onFooterPress} title={footerButtonText || "Continue"}/>
                    </>
                )}
                
            </View>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        // marginBottom: 12,
        justifyContent: 'center',
        marginHorizontal: 20,
        flex: 1,
    },
    input: {
        height: 50,
        // marginBottom: 12,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginVertical: 4,
        backgroundColor: "#fff",
        color: '',
    },
    text: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 20,
    },
});