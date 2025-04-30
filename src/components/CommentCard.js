import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getUniqueColorById} from '../utils/ColorManager'; // For non-repeating card colors

export default function CommentCard({
  item,
  onRatingPress = () => {},
  onDeletePress = () => {},
}) {
  const backgroundColor = getUniqueColorById(item.id);
  const [rating, setRating] = useState(0);

  const handleRatingCompleted = ratingValue => {
    setRating(ratingValue);
    onRatingPress({...item, rating: ratingValue});
  };
  const handleLocalDelete = () => {
    onDeletePress(item);
  };

  return (
    <View style={[styles.card, {backgroundColor}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <View style={[styles.ratingContainer, {backgroundColor}]}>
        <Rating
          type="star"
          startingValue={item.rating ?? rating}
          imageSize={24}
          onFinishRating={handleRatingCompleted}
          showRating={false}
          tintColor={backgroundColor} // ✅ this line makes the background of stars match the card
        />
      </View>
      <TouchableOpacity onPress={handleLocalDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#000',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
  ratingContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    padding: 5,
    borderRadius: 5, // optional for rounded corners
  },
  thanksText: {
    fontSize: 14,
    color: 'green',
    marginTop: 10,
    fontStyle: 'italic',
  },
});
