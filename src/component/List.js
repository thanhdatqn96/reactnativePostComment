import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default class List extends React.Component{

    renderItem = (obj) => {
        const Item = this.props.item;
        return(
            <Item data= {obj.item}/>
        );
    }

    keyExtractor = (item) => {
        return item.id.toString();
    }

    iItemSeparatorComponent = () => (
        <View style={styles.itemSeparator}/>
    );

    render(){
        return(
            <View style={styles.flatListContainer}>
                <FlatList 
                    data = {this.props.data}
                    renderItem ={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={this.iItemSeparatorComponent}
                    // contentContainerStyle = {styles.flatListContainer}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //item
    flatListContainer: {
        flex: 1,
        marginTop: 20
    },
});
