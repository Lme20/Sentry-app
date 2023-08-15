// Last Updated: 2023-08-15

import * as React from 'react';
import MapView from 'react-native-maps';
import { View,Text,StyleSheet } from 'react-native';
  
  //Main homescreen function
  export default function MapScreen({navigation}) {
    //return view to display on homeScreen
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <Text 
                onPress={()=> navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold'}}>
            </Text>
        </View>
    );
  }

  //Styling function 
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#171717',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });