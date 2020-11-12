import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class ListComment extends React.Component{

    render(){
      const {body} = this.props.data;
      return(
        <View style={styles.itemContainer}>
          <Text style={styles.itemBody}>{body}</Text>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  //item
  itemContainer: {
    paddingHorizontal: 20,
  },
  itemBody: {
    fontWeight: 'boild',
    fontSize: 15
  },
  itemSeparator: {
    height: 20
  },
});
