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

import Util from './util';
import BackIcon from './back_icon';
import ShareIcon from './share_icon';

export default class Header extends Component {

    render(){
        let obj=this.props.initObj;
        return(
            <View style={[styles.header,styles.row]}>
                <TouchableOpacity style={[styles.go]} onPress={this._pop}>
                    <BackIcon/>
                </TouchableOpacity>
                <View style={[styles.title, styles.row]}>
                    <Text style={styles.titlePos} numberOfLines={1}>{obj.title}</Text>
                </View>
                <TouchableOpacity style={[styles.go]} onPress={this._pop}>
                    <ShareIcon/>
                </TouchableOpacity>
            </View>
        )
    }

    _pop(){
        this.props.navigator.pop();
    }

}


const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    header:{
        height:44* Util.pixel,
        paddingLeft:12* Util.pixel,
        paddingRight:12* Util.pixel,
        borderTopWidth:1* Util.pixel,
        borderBottomWidth:1* Util.pixel,
        borderColor:'#e2e2e2',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    go:{
        left:0
    },
    title:{
        justifyContent:'center',
        flex:1,
        marginRight:18* Util.pixel,
    },
    titlePos:{
        color:'#333',
        fontSize:14* Util.pixel,
    }


})