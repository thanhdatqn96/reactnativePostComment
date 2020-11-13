import React from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
//import component
import Header from '../component/Header';
import List from '../component/List';
import ListItem from '../component/ListItem';
//redux
import { connect } from 'react-redux';


class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listPosts : [],
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            this.setState({listPosts: json});
        })
    }

    goToDetail = (obj) => {
        this.props.navigation.navigate('Detail',{
            data: obj.data,
        });
    }

    onStarButtonPressed = () => {
        this.props.navigation.navigate('SavedPost')
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header 
                    number={this.props.savedPosts.length}
                    onPress={this.onStarButtonPressed} 
                />
                <List 
                    data={this.state.listPosts} 
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

export default connect(mapStateToProps)(Post);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
