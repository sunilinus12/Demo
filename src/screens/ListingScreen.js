import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useListingModel} from '../hooks';

export default function ListingScreen() {
  const {loading, data, error, errorMessage} = useListingModel();
  return (
    <View>
      <Text>ListingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
