import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component{

    render(){
        const {onPress} = this.props;
        const {title, body} = this.props.data;
        return(
            <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemBody}>{body}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    //item
    itemContainer: {
        paddingHorizontal: 20,
    },
    itemTitle: {
        fontWeight: 'boild',
        fontSize: 30
    },
    itemBody: {
        fontWeight: 'boild',
        fontSize: 15
    },
    itemSeparator: {
        height: 20
    },
});
