import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const backgroundImage = require('../../assets/images/bg.png');

// Static project data
const getProjectData = () => ({
  title: 'Find ChaTime',
  description: 'Explore bubble tea locations at UQ.',
  instructions: 'Follow the clues and scan QR.',
  initial_clue: 'Start at UQ Union...',
  homescreen_display: 'Display all locations'
});

// Retrieve locations data
const getLocationsData = () => [
  { location_name: 'Old Clock Tower', score_points: 10, clue: 'Look for the ticking sound.' },
  { location_name: 'River Bridge', score_points: 20, clue: 'Walk across the bridge.' }
];

// Main Preview component showing the project details
const Preview = () => {
  const [project, setProject] = useState(null);
  const [locations, setLocations] = useState([]);
  const [locationsVisited, setLocationsVisited] = useState([]);
  const [points, setPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {

    const projectData = getProjectData();
    setProject(projectData);

    const locationsData = getLocationsData();
    setLocations(locationsData);

    const calculatedTotalPoints = locationsData.reduce((sum, location) => sum + location.score_points, 0);
    setTotalPoints(calculatedTotalPoints);
  }, []);

  const calculateTotalPoints = () => {
    return locationsVisited.reduce((sum, locationName) => {
      const location = locations.find(loc => loc.location_name === locationName);
      return sum + (location ? location.score_points : 0);
    }, 0);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Project Homepage */}
      {project && (
        <View style={styles.card}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.subtitle}>Description</Text>
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.subtitle}>Instructions</Text>
          <Text style={styles.description}>{project.instructions}</Text>
          <Text style={styles.subtitle}>Initial Clue</Text>
          <Text style={styles.description}>{project.initial_clue}</Text>

          {/* Points and Locations Summary */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summary}>
              Points: {calculateTotalPoints()}/{totalPoints}
            </Text>
            <Text style={styles.summary}>
              Locations visited: {locationsVisited.length}/{locations.length}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
    </ImageBackground>
  );
};

// Homepage styling
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#1D3577",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#3D3B35",
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  summaryContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#CA5C69',
    borderRadius: 8,
  },
  summary: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#FFFFFF', 
  },
});

export default Preview;
