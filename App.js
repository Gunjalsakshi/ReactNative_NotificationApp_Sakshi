import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const handleNotification = () => {
    Alert.alert("🔔 Incoming Notification", "This is a test push notification!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Notification App</Text>
      <Button title="Simulate Notification" onPress={handleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
