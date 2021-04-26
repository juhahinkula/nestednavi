import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function Settings({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Settings</Text> 
      <Button title="More settings..." onPress={() => navigation.navigate('More')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;