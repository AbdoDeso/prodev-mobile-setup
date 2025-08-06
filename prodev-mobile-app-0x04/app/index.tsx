import {  Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";  
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>
          <View style={styles.buttonContainer}>
                <Link href='/join' asChild>
                  <TouchableOpacity  style={styles.button}>
                  <Text  style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                  </TouchableOpacity>
               </Link>
          </View>
          <View style={styles.buttonContainer}>
              <Link href='/signin' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </Link>
          </View>
     
       </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "auto",
    height: "auto",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
 

 buttonContainer: {
    width: '100%', // Take full width of parent
    paddingHorizontal: 20, // Add horizontal padding
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },





});

