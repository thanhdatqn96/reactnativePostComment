import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
//import component
import List from '../component/List';
import ListItem from '../component/ListItem';
//redux
import { connect } from 'react-redux';

const iconBack = require('../assest/image/icon-back.png');

class SavedPost extends React.Component{

    goBack = () => this.props.navigation.goBack();

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.headerButtonContainer} onPress={this.goBack}>
                        <Image style={styles.headerLeftIcon} source = {iconBack}/>
                    </TouchableOpacity>
                </View>
                <List 
                    data={this.props.savedPosts} 
                    item={(props) => <ListItem {...props} onPress={() => this.goToDetail(props)} />}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savedPosts : state.savedPosts
    }
};

export default connect(mapStateToProps)(SavedPost);

const styles = StyleSheet.create({
    //header
    headerContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 20
    },
    headerButtonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        // backgroundColor: 'orange'
    },
    headerLeftIcon: {
        width: 30,
        height: 30,
        tintColor: 'blue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
