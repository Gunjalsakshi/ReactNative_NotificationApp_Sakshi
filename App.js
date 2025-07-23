import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const App = () => {
  const handleNotification = () => {
    Alert.alert('Notification Received', 'This is a simulated push notification.');
  };

  useEffect(() => {
    // Simulate notification received after 3 seconds
    const timer = setTimeout(() => {
      handleNotification();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native Push Notification Demo</Text>
      <Button title="Simulate Notification" onPress={handleNotification} />
    </View>
  );
};

export default App;
