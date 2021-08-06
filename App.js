import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Alert,
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View, 
  SafeAreaView, 
  Image, 
  Button
} from 'react-native';

export default function App() { 
  const handlePress = () => console.log("Text clicked")
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title="Click Me" 
      onPress={()=> alert("Clicked Button")}
      color="orange"
    />
      <Text 
        numberOfLines={1} 
        onPress={()=> Alert.alert("My title", "My message", [
          {text:"Yes", onPress: ()=> console.log("Yes")},
          {text:"No", onPress: ()=> console.log("No")}
        ])}
      >
        Hello React Native
      </Text>
      <TouchableOpacity onPress={()=>{console.log("Image tapped")}}>
        <Image 
          // fadeDuration={1000}
          //   blurRadius={10}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }}>
        </Image>
      </TouchableOpacity>
      <TouchableNativeFeedback>
        <View style={{width: 200, height: 70, backgroundColor: "blue"}}>
        </View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
