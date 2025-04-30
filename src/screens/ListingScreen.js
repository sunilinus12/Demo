import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {useListingModel} from '../hooks';
import {LoadingComponent} from '../components';
import CommentCard from '../components/CommentCard';

export default function ListingScreen() {
  const {
    loading,
    data,
    error,
    errorMessage,
    addingRatingData,
    handleDeletingCommentData,
  } = useListingModel();

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const onRatingPress = item => {
    addingRatingData(item);
  };
  const onDeletePress = item => {
    handleDeletingCommentData(item);
  };
  const renderItem = useCallback(
    ({item, index}) => (
      <CommentCard
        item={item}
        index={index}
        onRatingPress={onRatingPress}
        onDeletePress={onDeletePress}
      />
    ),
    [],
  );

  if (loading) return <LoadingComponent />;

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>
          Error: {errorMessage || 'Something went wrong!'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={() => (
          <View style={styles.centered}>
            <Text style={styles.emptyText}>No comments to display.</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
});
