import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
//import component
import List from '../component/List';
import ListItem from '../component/ListItem';
import ListComment from '../component/ListComment';

const iconStars = require('../assest/image/icon-stars.png');

const iconBack = require('../assest/image/icon-back.png');

export default class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listComments : [],
            isSaved: props.route.params.isSaved
        }
    }

    componentDidMount(){
        let postId = '';
        if(this.props.route && this.props.route.params && this.props.route.params.data.id) {
            postId = this.props.route.params.data.id;
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({listComments: json});
        })
    }

    goBack = () => this.props.navigation.goBack();

    onSave = () => {
        this.setState((state)=>({
            isSaved: !state.isSaved
        }));
        this.props.route.params.callback();
    }

    render(){
        const headerRightIconColor = this.state.isSaved ? 'red': '#fffaf0';
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.headerButtonContainer} onPress={this.goBack}>
                        <Image style={styles.headerLeftIcon} source = {iconBack}/>
                    </TouchableOpacity>
                    <View style={styles.headerRightContainer}>
                        <TouchableOpacity style={styles.headerButtonContainer} onPress={this.onSave}>
                            <Image 
                                style={[
                                    styles.headerRightIcon,
                                    {tintColor: headerRightIconColor}
                                ]} 
                                source = {iconStars}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ListItem data={this.props.route.params.data}/>
                <List data={this.state.listComments} item={ListComment}/>
            </SafeAreaView>
        );
    }
}

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
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRightIcon: {
        width: 30,
        height: 30,
        tintColor: '#fffaf0'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
