import { View, Text, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const backgroundImage = require('../assets/images/bg.png');

// Main About component
export default function About() {
  const router = useRouter();

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>About us</Text>
        <Text style={styles.description}>
        StoryPath is a location experience platform designed to allow users to 
        create and explore virtual museum exhibits, location-based tours, 
        and treasure hunts with clues. The users can create multiple projects and add locations,
        setup flexible scoring options, author and test their location-based experiences.
        </Text>
      </View>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

// About page styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#1D3577',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1D3577',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderColor: "#3D3B35",
    borderWidth: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
