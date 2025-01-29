import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { getProjects } from '../api/api';

export default function About() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  // Fetch projects data
  const fetchPosts = async () => {
    setLoading(true); 
    try {
      const fetchedPosts = await getProjects(); 
      const data = await fetchedPosts.json(); 
      setPosts(data || []); 
    } catch (error) {
      console.error("Error fetching projects:", error); 
      alert("Failed to fetch projects. Please try again later."); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Render each project item
  const renderProjectItem = ({ item }) => (
    <View style={styles.projectBox}>
      <Text style={styles.projectName}>{item.title}</Text>
      <Text style={styles.participants}>Participants: {item.participants}</Text>
    </View>
  );

  if (loading) {
    return <Text>Loading projects...</Text>;
  }

  // Main render function for the About component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <FlatList
        data={posts}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ width: '100%' }}
      />
      <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// Project page styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 16,
    backgroundColor: '#DEDCD6',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1D3577',
  },
  projectBox: {
    backgroundColor: '#CA5C69',
    borderWidth: 2,
    borderColor: '#3D3B35',
    borderRadius: 15,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  participants: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  goBackButton: {
    backgroundColor: '#455278',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    minWidth: 150,
    borderWidth: 2,
    borderColor: "#3D3B35",
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
