import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function More() {
  return(
    <View style={styles.container}>
      <Text>More settings</Text> 
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

export default More;
