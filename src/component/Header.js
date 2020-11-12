import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const iconStars = require('../assest/image/icon-stars.png');

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Post</Text>
                <TouchableOpacity  onPress={this.props.onPress} style={styles.headerRightContainer}>
                    <Text style={styles.headerRightNumber}>{this.props.number}</Text>
                    <Image style={styles.headerRightIcon} source = {iconStars}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //header
    headerContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    headerTitle : {
        fontSize : 30,
        fontWeight: 'boild'
    },
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRightNumber: {
        fontSize: 30,
        marginRight: 10
    },
    headerRightIcon: {
        width: 30,
        height: 30,
        tintColor: 'red'
    },
});
