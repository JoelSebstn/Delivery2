import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
// import Logo from '../../assets/SplashIcon.svg';
// import Base from '../../assets/Base.svg';
export function Splash() {
    return <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.roundedContainer}>
            {/* Render image */}
            <Image
                source={require('../../assets/SplashIcon.png')}
            />
            <Text style={styles.sectionTitle}>Non-Contact Deliveries</Text>
            <Text style={styles.description}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.buttonText}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView >
}