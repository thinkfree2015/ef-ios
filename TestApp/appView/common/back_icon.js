/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Util from './util';

export default class BackIcon extends Component {
    render(){
        return (
            <View>
                <View style={styles.go}></View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    go:{
        borderLeftWidth:2*Util.pixel,
        borderBottomWidth:2* Util.pixel,
        width:15*Util.pixel,
        height:15*Util.pixel,
        transform: [{rotate: '45deg'}],
        borderColor:'#333',
        marginLeft:3*Util.pixel,
    }
});