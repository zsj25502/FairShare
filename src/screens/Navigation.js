import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from "react";
import Icon from 'native-base';
import Button from 'react-native';
import Home from './Home';
import Friends from './Friends';
import Activity from './Activity';
import BillPrompt from './billsplit/BillPrompt';
import SplitStep1 from './billsplit/SplitStep1';
import SplitStep2 from './billsplit/SplitStep2';
import SplitStep3 from './billsplit/SplitStep3';
import NoSplit from './billsplit/NoSplit';
import Groups from './groups/Groups.js';
import SearchFriends from './groups/SearchFriends.js';
import ProfilePage from './profilePage/ProfilePage.js';
import BillSplitProcess from './billsplit/BillSplitProcess';
import Row from './Row';
import Landing from './Landing';
import ViewChargedScreen from './ViewChargedScreen';
import ViewRequestScreen from './ViewRequestScreen';
import ChargePeople from './billsplit/ChargePeople';
import EditProfile from './profilePage/EditProfile';


const Navigation = createStackNavigator({
    Home: { screen: Home, navigationOptions: () => ({
            header:null,
        }), },
    Friends: { screen: Friends, navigationOptions: () => ({
            title: 'My Activity',
            headerStyle:{backgroundColor: '#3d3e52', elevation:0, fontFamily: "Raleway-Regular"},
            headerTitleStyle: {alignSelf:'center', color: '#fcfcfe', textAlign: 'center', fontFamily: "Raleway-Regular"},
            headerLeft:null,
        }),},
    Activity: { screen: Activity, navigationOptions: () => ({
            title: 'My Activity',
            headerStyle:{backgroundColor: '#3d3e52', elevation:0, fontFamily: "Raleway-Regular"},
            headerTitleStyle: {alignSelf:'center', color: '#fcfcfe', textAlign: 'center', fontFamily: "Raleway-Regular"},
            headerLeft:null,
        }),},
    BillPrompt: {screen: BillPrompt, navigationOptions: () => ({
            headerStyle:{backgroundColor: '#82b85a', elevation:0},
        }),},
    SplitStep1: {screen: SplitStep1},
    SplitStep2: {screen: SplitStep2},
    SplitStep3: {screen: SplitStep3},
    NoSplit: {screen: NoSplit},
    BillSplitProcess: {screen: BillSplitProcess},
    ProfilePage: {screen: ProfilePage, navigationOptions: () => ({
            headerStyle:{backgroundColor: '#fcfcfe', elevation:0},
            // headerRight: (
            //     <Button transparent
            //             onPress={() =>
            //                 this.props.navigation.navigate('Groups')
            //             }
            //     >
            //         <Icon active name="edit" />
            //     </Button>
            //
            // ),
        }),},
    Row: {screen: Row},
    Landing: {screen: Landing, navigationOptions: () => ({
            header:null,
        }),},
    Groups: { screen: Groups, navigationOptions: () => ({
    headerStyle:{backgroundColor: '#559535', elevation:0, fontFamily: "Raleway-Regular"},
        }),},
    ViewCharged: { screen: ViewChargedScreen, navigationOptions: () => ({
            header:null,
        }), },
    ViewRequest: { screen: ViewRequestScreen, navigationOptions: () => ({
            header:null,
        }), },
    ChargePeople: { screen: ChargePeople, navigationOptions: () => ({
            header:null,
        }), },
    SearchFriends: {screen: SearchFriends},
    EditProfile: { screen: EditProfile, navigationOptions: () => ({
            header:null,
        }), },
        });

const App = createAppContainer(Navigation);

export default App;