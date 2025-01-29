import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

// Main Index component
export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.jpeg')} 
        style={styles.logo} 
      />
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>STORYPATH</Text>
      <Text style={styles.subtitle}>Explore Unlimited Location-based Experiences</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          With StoryPath, you can discover and create amazing location-based adventures. From city tours to treasure hunts, the possibilities are endless!
        </Text>
      </View>

      {/* Containers for Create profiles and Explore projects buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.buttonText}>Create Profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/project")}
        >
          <Text style={styles.buttonText}>Explore Projects</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Welcome page styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDCD6", 
    padding: 20,
  },
  logo: {
    width: 150,  
    height: 80, 
    resizeMode: "contain", 
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1D3577",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#1D3577",
    marginBottom: 25,
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
  },
  button: {
    backgroundColor: "#3D3B35",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    flex: 1,
    borderWidth: 5,
    borderColor: "#3D3B35",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  infoBox: {
    borderWidth: 2,
    borderColor: "#3D3B35",
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,
    backgroundColor: "#DEDCD6",
    width: "100%",
  },
  infoText: {
    textAlign: "center",
  }
});

