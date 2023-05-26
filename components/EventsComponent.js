import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getEvents } from '../services/api'; // adjust the path as per your file structure

const EventsComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEvents();
            setEvents(data);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}> 
            {events.map((event) => (
                <View style={styles.eventCard} key={event.id}>
                    <Text style={styles.eventTitle}>{event.id}</Text>
                    <Text style={styles.eventName}>{event.name}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  eventCard: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default EventsComponent;
