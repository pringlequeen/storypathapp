import { View, Text, StyleSheet} from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { UserProvider, useUser } from './UserContext';

// Custom drawer content component
const CustomDrawerContent = (props) => {
  const pathname = usePathname();
  const { username } = useUser();

  useEffect(() => {
    console.log("Current Path", pathname);
  }, [pathname]);

  return (
    <View style={styles.drawerContainer}>
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      {/* User information section */}
      <View style={styles.infoContainer}>
        <View style={styles.infoDetailsContainer}>
          <Text style={styles.appTitle}>STORYPATH</Text>
          {username && <Text style={styles.username}>{username}</Text>}
        </View>
      </View>

      {/* Drawer items for navigation */}
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/" ? "#DEDCD6" : "#1D3577"}
          />
        )}
        label={"Welcome"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/" ? "#DEDCD6" : "#1D3577" },
        ]}
        style={{ backgroundColor: pathname == "/" ? "#3D3B35" : "#DEDCD6" }}
        onPress={() => {
          router.push("/");
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/profile" ? "#DEDCD6" : "#1D3577"}
          />
        )}
        label={"Profiles"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/profile" ? "#DEDCD6" : "#1D3577" },
        ]}
        style={{ backgroundColor: pathname == "/profile" ? "#3D3B35" : "#DEDCD6" }}
        onPress={() => {
          router.push("/profile");
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/project" ? "#DEDCD6" : "#1D3577"}
          />
        )}
        label={"Projects"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/project" ? "#DEDCD6" : "#1D3577" },
        ]}
        style={{ backgroundColor: pathname == "/project" ? "#3D3B35" : "#DEDCD6" }}
        onPress={() => {
          router.push("/project");
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/about" ? "#DEDCD6" : "#1D3577"}
          />
        )}
        label={"About"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/about" ? "#DEDCD6" : "#1D3577" },
        ]}
        style={{ backgroundColor: pathname == "/about" ? "#3D3B35" : "#DEDCD6" }}
        onPress={() => {
          router.push("/about");
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/map" ? "#DEDCD6" : "#1D3577"}
          />
        )}
        label={"Project Homepage"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/homepage" ? "#DEDCD6" : "#1D3577" },
        ]}
        style={{ backgroundColor: pathname == "/homepage" ? "#3D3B35" : "#DEDCD6" }}
        onPress={() => {
          router.push("/(tabs)/homepage");
        }}
      />
    </DrawerContentScrollView>
    </View>
  );
};

// Main layout component
export default function Layout() {
  return (
    <UserProvider>
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="index" options={{headerShown: true, headerTitle: "Welcome"}}  />
      <Drawer.Screen name="project" options={{headerShown: true, headerTitle: "Projects"}} />
      <Drawer.Screen name="profile" options={{headerShown: true, headerTitle: "Profile"}} />
      <Drawer.Screen name="about" options={{headerShown: true, headerTitle: "About"}} />
    </Drawer>
    </UserProvider>
  );
}

// Navigation bar styling
const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  infoDetailsContainer: {
    marginTop: 25,
    marginLeft: 10,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#1D3577",
  },
  drawerContent: {
    backgroundColor: "#DEDCD6", 
  },
  drawerContainer: {
    flex: 1, 
    backgroundColor: "#DEDCD6", 
  },

});
