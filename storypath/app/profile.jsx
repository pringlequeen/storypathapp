import React, { useState } from "react";
import { SafeAreaView, View, Image, Dimensions, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { apiRequest } from '../api/api'; 
import { useUser } from './UserContext'; 

const { width, height } = Dimensions.get("window");

export default function Profile() {
    const router = useRouter();
    const [photoState, setPhotoState] = useState({});
    const [username, setUsername] = useState('');
    const { setUsername: saveUsernameToContext } = useUser(); 

    // Handle image selection
    async function handleChangePress() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // Update the photo state if an image is chosen
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setPhotoState(result.assets[0]);
        }
    }

    // Remove the selected image
    async function handleRemovePress() {
        setPhotoState({});
    }

    const hasPhoto = Boolean(photoState.uri);

    // Save the entered username to the API
    const handleSave = async () => {
        try {
            const response = await apiRequest('/tracking', 'POST', {
                participant_username: username,
            });
            if (response.ok) {
                console.log("Username saved successfully:", username);
                saveUsernameToContext(username); 
            } else {
                console.error("Failed to save username.");
            }
        } catch (error) {
            console.error("Error saving username:", error.message);
        }
    };

    // Component to display the selected image
    function Photo() {
        if (hasPhoto) {
            return (
                <View style={styles.photoFullView}>
                    <Image
                        style={styles.photoFullImage}
                        resizeMode="cover"
                        source={{ uri: photoState.uri }}
                    />
                </View>
            );
        } else {
            return <View style={styles.photoEmptyView} />;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Photo />
            {/* Input field for username */}
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
            />
            {/* Container for photo action buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleChangePress}>
                    <Text style={styles.buttonText}>{hasPhoto ? "Change Photo" : "Add Photo"}</Text>
                </TouchableOpacity>
                {hasPhoto && (
                    <TouchableOpacity style={styles.button} onPress={handleRemovePress}>
                        <Text style={styles.buttonText}>Remove Photo</Text>
                    </TouchableOpacity>
                )}
            </View>
            {/* Container for navigation and save buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// Profile page styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEDCD6',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#1D3577',
    },
    photoFullView: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 10,
        width: '60%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoEmptyView: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "#999",
        borderStyle: "dashed",
        width: "60%",
        height: 150,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoFullImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#455278',
        borderRadius: 15,
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: "#3D3B35",
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
