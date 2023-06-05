import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./components/Login"; // Import the Login component
import New from "./components/New"; // Import the Login component

import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import ProfileCreate from "./components/ProfileCreate";
import Statistiques from "./components/Statistiques";
import Filtre from "./components/Filtre";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();














function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Dashboard</Text> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>logout</Text>
      </TouchableOpacity>
    </View>
  );
}








function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerImage}>
        <Image source={require('./assets/image121.png')} style={styles.logoImage} />
        {/* Autres éléments du contenu du drawer */}
      </View>
      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Profile"
        icon={({ color, size }) => (
          <Ionicons name="person" size={25} color="black" />

        )}
        onPress={() => props.navigation.navigate("Profile")}
      />
      
       
       <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Rechercher"
        icon={({ color, size }) => (
          <Ionicons name="search" size={25} color="black" />
          )}
        onPress={() => props.navigation.navigate("Rechercher")}
      />
      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Statistiques"
        icon={({ color, size }) => (
          <Ionicons name="analytics" size={32} color="black" />
          )}
        onPress={() => props.navigation.navigate("Statistiques")}
      />
<DrawerItem
        label="A propos"
        labelStyle={{ color: 'black' }}
        icon={({ color, size }) => (
          <Ionicons name="md-home" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("A propos")}
      />
      
     
      
     



      <DrawerItem
        labelStyle={{ color: 'black' }}
        label="Logout"
        icon={({ color, size }) => (
          <Ionicons name="md-log-out" size={size} color="black" />
        )}
        onPress={() => props.navigation.navigate("Login")}
      />
    </DrawerContentScrollView>
  );
}

function Drawer() {
  return (
    <DrawerNav.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <DrawerNav.Screen name="Login" component={Login} options={{ headerShown: false }} />

      <DrawerNav.Screen name="Profile" component={ProfileCreate} />
      <DrawerNav.Screen name="Statistiques" component={Statistiques} />
      <DrawerNav.Screen name="A propos" component={New} />
      <DrawerNav.Screen name="Rechercher" component={Filtre} />


    </DrawerNav.Navigator>
  );
}
function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Dashboard"
        component={Drawer}
        options={{ headerShown: true }}
      />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={Drawer} />
        {/*//etait avant 'Tab'
        
                <Stack.Screen name="Profile" component={Profile} />

        */}
        <Stack.Screen name="Profile" component={ProfileCreate} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="A propos" component={New} />
        <Stack.Screen name="Statistiques" component={Statistiques} />
        <Stack.Screen name="Rechercher" component={Filtre} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  containerImage: {
    flex: 0,
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 100,
    marginLeft:30,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

