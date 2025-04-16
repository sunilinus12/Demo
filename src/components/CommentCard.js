import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function CommentCard({ item, index }) {
  return (
    <View style={[styles.card, { backgroundColor: colors[index % colors.length] }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
}

const colors = ['#ffe4e1', '#e6f7ff', '#f0fff0', '#fffacd', '#f5f5f5'];

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
    textTransform:"capitalize"
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
});

export default React.memo(CommentCard); // 💡 wraps it in memo for optimization
