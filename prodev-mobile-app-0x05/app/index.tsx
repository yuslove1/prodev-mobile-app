import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { router, Link} from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
            </View>

            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>
                The best prices for over 2{" "}
              </Text>
              <Text style={styles.titleSubText}>
                million properties worldwide
              </Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={() => router.push("/join")} style={styles.buttonPrimary}>
                  <Text style={styles.buttonPrimaryText}>
                    Join here
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push("/signin")}
                  style={styles.buttonSecondary}
                >
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Link 
                href={
                  {
                    pathname: '/(home)',
                  }
                }
                style={{ color: "white" }}>Continue to home</Link>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
