import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
  
  //Main homescreen function
  export default function HomeScreen({navigation}) {
    //return view to display on homeScreen
    return (
        <View style={styles.container}>
            <Text 
                onPress={() => alert('This is the home screen')} 
                style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Home screen</Text>
        </View>
    );
  }

  //Styling function 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });