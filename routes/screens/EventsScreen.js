import * as React from 'react';
import { View,Text, StyleSheet, ScrollView} from 'react-native';
import EventsComponent from '../../components/EventsComponent';
  
  //Main homescreen function
  export default function EventsScreen({navigation}) { 
    //return view to display on homeScreen
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text 
                onPress={()=> navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white'}}>
            <EventsComponent />
            </Text>
        </View>
      </ScrollView>
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