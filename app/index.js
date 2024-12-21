import { useNavigation } from "expo-router";
import { setStatusBarBackgroundColor, setStatusBarStyle, } from "expo-status-bar";
import { useEffect } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Dimensions } from "react-native";

function Index() {

    const { width, height } = Dimensions.get("screen");
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("login/loginPage")
        }, 2500);
    }, [])

    return (
        <>
            <ImageBackground
                imageStyle={{ opacity: 0.9, backgroundColor: "#00000022" }}
                source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                resizeMode="cover"
                style={{ width: width, height: height }}
            >

              

            </ImageBackground>
        </>
    )
}
export default Index

