import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
        <View> 
            {events.map((event) => (
                <Text style={{color: 'white'}} key={event.id}>{event.name}</Text>
            ))}
        </View>
    );
};

export default EventsComponent;