import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getUniqueColorById} from '../utils/ColorManager';

function CommentCard({item, index}) {
  const backgroundColor = getUniqueColorById(item.id);
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
});

export default React.memo(CommentCard); // 💡 wraps it in memo for optimization
