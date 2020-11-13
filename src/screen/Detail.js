import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
//import component
import List from '../component/List';
import ListItem from '../component/ListItem';
import ListComment from '../component/ListComment';
//import redux
import { connect } from 'react-redux';
import { savePost } from '../redux/action';
import { unsavePost } from '../redux/action';

const iconStars = require('../assest/image/icon-stars.png');

const iconBack = require('../assest/image/icon-back.png');

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listComments : [],
            isSaved: props.savedPosts.some(
                (e)=>e.id === props.route.params.data.id
            )
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
        if(this.state.isSaved){
            this.props.unsavePost(this.props.route.params.data);
        }else{
            
            this.props.savePost(this.props.route.params.data);
        }
        this.setState((state)=>({
            isSaved: !state.isSaved
        }));     
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

const mapStateToProps = (state) => {
    return {
        savedPosts : state.savedPosts
    }
};

const mapDispatchToProps = {
    savePost,
    unsavePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

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
