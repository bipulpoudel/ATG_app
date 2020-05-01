import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ActivityIndicator
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {loadPost} from '../api/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import userImage from '../assets/404.png';
import SingleTag from "./components/SingleTag";
import Ico from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import SingleGroup from "./components/SingleGroup";
import * as Font from 'expo-font';
import PostDescription from "./components/PostDescription";
import { ScrollView } from "react-native-gesture-handler";
import ImageHeader from "../components/ImageHeader";
import GestureRecognizer from 'react-native-swipe-gestures';
import {loadId, storeId} from '../LocalStorage/index';

var id;

const avail_id = ['5ea9938307d49135ba47bbc7','5ea991ba4c87c3359a63c92e','5ea9938307d49135ba47bbc7','5ea993634c87c3359a63c9ec','5ea9933a66e603359fe0c3ab','5ea9931f4c87c3359a63c9d1','5ea992f166e603359fe0c382','5ea9921666e603359fe0c320','5ea991ba4c87c3359a63c92e'];
var index = 6;

class PostScreen extends Component  {
    constructor(){
        super()
        this.state = {
            data:{},
            fontLoading: true,
            postLoading: true,
            splited : [],
        }
    }
    async componentDidMount(){
            id = await loadId();
            this.loadFont();
            let res =  await loadPost(id);
            this.setState({
                    fontLoading:false,
                    postLoading:false,
                    data: res,
                    splited:[],
            });
            let result = this.splitList();
            this.setState({
                fontLoading:false,
                postLoading:false,
                data: res,
                splited:result,
            })
        
    }
    async loadFont(){
            await Font.loadAsync({
                'IBMPlexSans-Bold':require('../assets/fonts/IBMPlexSans-Bold.ttf'),
                'IBMPlexSans-Regular':require('../assets/fonts/IBMPlexSans-Regular.ttf'),
                'IBMPlexSans-Medium':require('../assets/fonts/IBMPlexSans-Medium.ttf'),
            });
    }

    splitList(){
        return this.state.data.PostDetail.tags.split(",");
    }
    render(){
        return (
            <GestureRecognizer
                onSwipeLeft={async() => {
                    index--;
                    id = avail_id[index];
                    storeId(id);
                    let res =  await loadPost(id);
                    this.setState({
                            fontLoading:false,
                            postLoading:false,
                            data: res,
                            splited:[],
                    });
                    let result = this.splitList();
                    this.setState({
                        fontLoading:false,
                        postLoading:false,
                        data: res,
                        splited:result,
                    })
                }}
                onSwipeRight={async() => {
                    index++;
                    id = avail_id[index];
                    await storeId(id);
                    let res =  await loadPost(id);
                    this.setState({
                            fontLoading:false,
                            postLoading:false,
                            data: res,
                            splited:[],
                    });
                    let result = this.splitList();
                    this.setState({
                        fontLoading:false,
                        postLoading:false,
                        data: res,
                        splited:result,
                    })
                }}>

                <SafeAreaView view={styles.main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                
                {this.state.postLoading? <ActivityIndicator size='large' style={styles.main}/>:
            <>
            {this.state.data.PostDetail.profile_image == '' ?<CustomHeader name = '' navigation = {this.props.navigation}/>:<ImageHeader image = {this.state.data.PostDetail.profile_image}/>}
                <View style={styles.container}>
                    <View>
                    <View>
                    <Text style={styles.headerText}>{this.state.data.PostDetail.title}</Text>
                    </View>
                    <View style={styles.userDetail}>
                            <View style={styles.userCircle}>
                            <Image style={styles.userImage} source={{uri: this.state.data.PostDetail.profile_picture }}></Image>
                            </View>
                            <View style={styles.postUser}>
                            <Text style={styles.userName}>{this.state.data.PostDetail.first_name} {this.state.data.PostDetail.last_name}</Text>
                            </View>
                            <Text style={styles.text}>Article</Text>
                            <View style={styles.circle}></View>
                            <Text style={styles.text}>{this.state.data.PostDetail.min_read}</Text>
                    </View>
                    <View style={styles.postDetail}>
                    <FlatList data={this.state.data.PostDetail.description}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                            return <PostDescription data={item.data} type={item.type}
                            />
                    }}
                    ></FlatList>
                    </View>
                    <FlatList data={this.state.splited}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                            return <SingleTag name={item}/>
                    }}
                    ></FlatList>
                    <View style={styles.group}>
                    <Text style={styles.groupText}>Groups</Text>
                    <View style={styles.groupElement}>
                    {this.state.data.PostDetail.posted_by.map((group,index) => {
                        return <SingleGroup name={group.group_name} key={index}/>
                    })}
                    </View>
                    </View>
    
                    <View style={styles.postReaction}>
                        <View style={styles.postCommentDetail}><Text style={styles.postCommentDetailText}>{this.state.data.PostDetail.total_upvote} likes, {this.state.data.PostDetail.comment_count} comments</Text></View>
                        <View style={styles.postLikeButton}>
                        <Icon name="like2" size={25} style={{marginLeft:20,}}/>
                        <Icon name="dislike2" size={25} style={{marginLeft:20,transform: [{rotateY: '180deg'}]}}/>
                        <Ico name="dots-three-horizontal" color="grey" size={30} style={{marginLeft:20,}}/>
                        </View>
                    </View>
                    <View style={styles.commentUser}><Image style={styles.userImage} source={userImage}></Image>
                    <Text  style={styles.commentText}>Comment....</Text>
                    </View>
                    <Text style={styles.groupText}>Comments</Text></View>
                </View>
                
            </>
            }
            </ScrollView>
        </SafeAreaView>

            </GestureRecognizer>

        );
    }
}
export default PostScreen;

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flex:1,
        paddingLeft:'5%',
        paddingTop:'5%',
        paddingBottom:'5%',
        backgroundColor:'white',
    },
    headerText:{
        fontSize:24,
        fontFamily: 'IBMPlexSans-Bold',
        lineHeight:24,
    },userDetail:{
        height:80,
        flexDirection:'row',
        width:"100%",
        alignItems:'center',
        marginBottom:5,
        marginTop:5,
    },
    userImage:{
        height:45,
        width:45,
        borderRadius: 45/2,
    },
    userCircle:{
        height:60,
        width:60,
        borderRadius: 60/2,
        borderWidth:3,
        borderColor:'#00b85c',
        alignItems:'center',
        justifyContent:'center',
    },
    userName:{
        color:'black',
        fontSize:16,
        fontFamily:'IBMPlexSans-Medium',
    },
    postUser:{
        marginLeft:'2%',
    },
    text:{
        marginLeft:'2%',
        color:'grey',
        fontSize:18,
        fontFamily:'IBMPlexSans-Regular',
    },
    circle:{
        width:7,
        height:7,
        borderRadius:7/2,
        backgroundColor:'grey',
        marginLeft:'2%',
    },
    postTag:{
        height:50,
        flexDirection:'row',
    },
    groupText:{
        fontSize:20,
        marginTop:10,
        fontFamily:'IBMPlexSans-Medium',
    },
    groupElement:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    postReaction:{
        flexDirection:'row',
        marginTop:10,
    },
    postCommentDetail:{
        flex:1,
        justifyContent:'center',
    },
    postLikeButton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    postCommentDetailText:{
        fontSize:18,
        color:'#2f6ce5',
        fontFamily:'IBMPlexSans-Medium',
    },
    commentUser:{
        paddingTop:10,
        paddingBottom:10,
        marginTop:10,
        backgroundColor:'#f1f3f5',
        marginLeft:'-5%',
        paddingLeft:'5%',
        flexDirection:'row',
        alignItems:'center',
    },
    commentText:{
        fontSize:16,
        marginLeft:20,
        fontFamily:'IBMPlexSans-Medium',
    }
});