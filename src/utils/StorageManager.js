import AsyncStorage from '@react-native-async-storage/async-storage';

// Store Data
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value); // Convert the value to a JSON string
    await AsyncStorage.setItem(key, jsonValue);
    // console.log('Data stored:', value);
  } catch (e) {
    // console.error('Failed to save data', e);
  }
};

// Retrieve Data
// Retrieve Data
export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key); // Get the stored value as a string
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue); // Parse the JSON string back to an object
    //   console.log('Retrieved data:', value);
      return value; // Return the parsed value
    } else {
    //   console.log('No data found for the key:', key);
      return null; // Return null if no data is found
    }
  } catch (e) {
    console.error('Failed to fetch data', e);
    return null; // Return null in case of an error
  }
};

// Remove Data
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    // console.log('Data removed for key:', key);
  } catch (e) {
    console.error('Failed to remove data', e);
  }
};

// Clear All Data
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    // console.log('All data cleared');
  } catch (e) {
    console.error('Failed to clear data', e);
  }
};
