import { View, StyleSheet } from "react-native";

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",  // top to bottom
        alignItems: "center",   // right to left
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});