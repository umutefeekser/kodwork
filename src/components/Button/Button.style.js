import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container_f: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'tomato',
    },

    

    text_f: {
        fontSize: 20,
        fontWeight: "bold",
        color: "tomato"
    },

//  ------------------------------------

    container_unf: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'tomato',
    },

    text_unf: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})