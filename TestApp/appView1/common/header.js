/**
 * Created by qiuxi on 2016/2/16.
 */

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';


export default class Header extends Component {

    render(){
        let obj=this.props.initObj;
        <Text>aasd</Text>
    }

}


const styles=StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    header:{
        height:50,
        backgroundColor:'#3497FF'
    },
    fontFFF:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    title:{
        flex:1
    },
    titlePos:{
        marginLeft:-20,
        width:200
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
})