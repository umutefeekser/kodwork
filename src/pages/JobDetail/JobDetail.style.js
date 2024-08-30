import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1
    },

    info_container: {
        marginBottom: 10,
        flex: 1
    },

    title:{
        padding: 5,
        fontSize: 26,
        fontWeight: "bold",
        color: "rgb(55, 71, 79)"
    },

    location: {
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    },

    level: {
        padding: 5,
        fontSize: 20,
        fontWeight: "bold"
    },

    tomato: {
        color: "tomato"
    },

    detail_container: {
        marginTop: 10,
        flex: 8
    },

    detail_title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "rgb(55, 71, 79)",
        textAlign: "center"
    },

    detail: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray"
    },

    button_container: {
        flex: 1,
        flexDirection: "row"
    }
})