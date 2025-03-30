import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
    return (
        <View className="w-full h-16 bg-white flex justify-between items-center">
            <Pressable>
                <Ionicons name="menu" size={24} color="#121212" />
            </Pressable>
        </View>
    )
}
