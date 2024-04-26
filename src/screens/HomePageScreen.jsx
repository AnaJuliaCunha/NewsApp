import { Text, View } from "react-native";
import { Button } from "react-native";


 
export default function HomePageScreen( {navigation} ) {
    return (
        <View>
            <Text>News Sobre o Mundo!! 🎉</Text>
            <Button
              title="News Sobre o Mundo" onPress={() => navigation.navigate("MundoPageScreen")} 
            /> 
        </View>
    );
}