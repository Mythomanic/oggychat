import { Text, TouchableOpacity, View } from "react-native";
import styles, { mainBlue, mainPurple2 } from "../../App.styles";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
export default function Toolbar({ selectedMenu }) {
    const handleMenuChange = (menu) => {
        router.push(menu)
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: mainPurple2, width: '100%' }}>
            <TouchableOpacity style={{ backgroundColor: selectedMenu === 1 ? mainBlue : 'transparent', ...styles.toolbarItem }} onPress={() => handleMenuChange("home/homepage")}>
                <FontAwesome name="home" size={24} color="white" />
                <Text style={styles.toolbarItemText}>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: selectedMenu === 2 ? mainBlue : 'transparent', ...styles.toolbarItem }} onPress={() => handleMenuChange("home/homepage")}>
                <FontAwesome name="home" size={24} color="white" />
                <Text style={styles.toolbarItemText}>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: selectedMenu === 3 ? mainBlue : 'transparent', ...styles.toolbarItem }} onPress={() => handleMenuChange("home/homepage")}>
                <FontAwesome name="home" size={24} color="white" />
                <Text style={styles.toolbarItemText}>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: selectedMenu === 4 ? mainBlue : 'transparent', ...styles.toolbarItem }} onPress={() => handleMenuChange("profile/profile")}>
                <FontAwesome name="user" size={24} color="white" />
                <Text style={styles.toolbarItemText}>Profil</Text>
            </TouchableOpacity>

        </View>
    );
} 