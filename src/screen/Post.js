import React from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
//import component
import Header from '../component/Header';
import List from '../component/List';
import ListItem from '../component/ListItem';


export default class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listPosts : [],
            savePosts : []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            this.setState({listPosts: json});
        })
    }

    onSave = (item) => {
        const isSaved = this.state.savePosts.some((e) => e.id === item.id);
        if(isSaved){
            this.setState((state)=>({
                savePosts: state.savePosts.filter((e)=>e.id !== item.id) 
            }));
        }else{
            this.setState((state)=>({
                savePosts: [...state.savePosts,item] 
            }));
        }     
    }

    goToDetail = (obj) => {
        this.props.navigation.navigate('Detail',{
            data: obj.data,
            isSaved: this.state.savePosts.some((e) => e.id === obj.data.id),
            callback: () => {
                this.onSave(obj.data);
            },
        });
    }

    onStarButtonPressed = () => {
        this.props.navigation.navigate('SavedPost',{data: this.state.savePosts})
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header 
                    number={this.state.savePosts.length}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
