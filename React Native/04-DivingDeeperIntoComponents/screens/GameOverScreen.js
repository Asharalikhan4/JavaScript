import { View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
    return (
        <View>
            <Title>Game Over!</Title>
            <View style={styles.imgContainer}>
                <Image source={require("../assets/images/success.png")} />
            </View>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    imgContainer: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 3,
        color: Colors.primary800,
        overflow: "hidden",
        margin: 36
    }
});