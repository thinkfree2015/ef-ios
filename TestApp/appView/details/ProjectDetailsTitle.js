/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Util from './../common/util';



export default class Title extends Component {
    render(){
        let obj=this.props.initObj;
        return(
            <View style={styles.title}>
                <Text style={styles.fz12} numberOfLines={1}>{obj.title}</Text>
            </View>
        )
    }

}


const styles=StyleSheet.create({
    fz12:{
        fontSize:12*Util.pixel,
        color:'#000'
    },
    title:{
        height:37*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
        alignItems:'center',
        flexDirection:'row',
    },
})