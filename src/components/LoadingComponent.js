import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'green'} size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"center",
    alignItems:"center"
  },
});
