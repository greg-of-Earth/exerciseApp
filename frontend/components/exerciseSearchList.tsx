import React from "react";
import { FlatList, Image, Linking, StyleSheet, Text, View } from 'react-native';


// component to display exercise search results
export default function SearchExerciseList({ results }: { results: any[] }) {

    return (
        <View style={ styles.main }>
            <FlatList
                data={results}
                keyExtractor={item => item.id.toString()}
                numColumns={1} // two column list
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.imageUrl }} style={styles.thumb} />
                        <View style={ styles.textContainer }>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(item.videoUrl)}>Watch Video</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ padding: 8 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 2,
        padding: 4,
        backgroundColor: '#fafafa',
        borderRadius: 6,
        
    },
    item: {
        padding: 8,
        backgroundColor: '#eee',
        marginVertical: 2,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row', // align image and text side by side
        alignItems: 'center', // vertical alignment
    },
    thumb: {
        width: '20%', 
        aspectRatio: 1, 
        marginBottom: 4,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // vertical centering
       alignItems: 'center', // align text centered horizonally to item container
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    link: {
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
        alignSelf: 'flex-end', // align to right edge
    },
});