import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E2CBFF', flex: 1,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center'
    },
    description: {
        fontSize: 17,
        fontWeight: '400',
        color: '#9586A8',
        textAlign: 'center',
        marginVertical: 20
    },
    roundedContainer: {
        height: '70%',
        backgroundColor: '#F6F5F5', // Set container background color
        borderTopLeftRadius: 30, // Adjust as needed for the desired curve
        borderTopRightRadius: 30, // Adjust as needed for the desired curve
        overflow: 'hidden', // Ensure content does not overflow the rounded corners
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20, // Adjust padding as needed
        alignItems: 'center', // Center items horizontally
        paddingTop: 50
    },
    button: {
        backgroundColor: '#0BCE83',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
        borderRadius: 8,
        marginTop: 25
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600'
    }
});