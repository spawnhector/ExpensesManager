

import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

const CustomSearchBar = ({search,onChangeText,onClear}) => {
  return (
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={onChangeText}
          placeholder="Type Here..."
          value={search}
        />
  );
};

const styles = StyleSheet.create({
  search: {
      width: 400
  }
});

export default CustomSearchBar;