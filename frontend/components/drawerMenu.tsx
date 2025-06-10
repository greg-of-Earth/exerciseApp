import auth from '@react-native-firebase/auth';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function DrawerMenu(props: any) {
    const router = useRouter();

    // if user signs out go to main screen 
    const signOut = async () => {
        try {
          await auth().signOut();
          router.replace({
            pathname: '/'
        });
        } catch (e: any) {
          const err = e as FirebaseError;
          alert('Sign out Failed: ' + err.message);
        }
    };

    return (
        <SafeAreaView style={ styles.safeArea }>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="Sign Out" onPress={signOut}/>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});