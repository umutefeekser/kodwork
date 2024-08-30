import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'rgb(205, 205, 205)',
        borderWidth: 1
    },

    body_container: {
        alignItems: "flex-start"
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    company: {
        fontSize: 20
    },

    location: {
        backgroundColor: 'tomato',
        fontSize: 18,
        color: "white",
        padding: 3,
        paddingHorizontal: 10,
        fontWeight: "bold",
        borderRadius: 50
    },

    level: {
        textAlign: "right",
        fontSize: 18,
        color: 'tomato',
        fontWeight: "bold",
        margin: 5
    }
})