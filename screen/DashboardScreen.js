import { View, Text, StyleSheet } from "react-native";

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DashboardScreen</Text>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});
