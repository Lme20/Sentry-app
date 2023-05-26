import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
  
  //Main homescreen function
  export default function LandingScreen({navigation}) {
    //return view to display on homeScreen
    return (
        <View style={styles.container}>
            <Text 
                onPress={()=> navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                Landing screen
            </Text>
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