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
import Util from './../common/util';
import Title from './ProjectDetailsTitle';


export default class ProjextDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:Util.size.width-24*Util.pixel
        };
    }

    render(){
        let wSzie=Math.floor((this.state.width/592)*100);
        return(
            <View style={[styles.row,styles.recordItems]} {...this.props}>
                <Image style={styles.recordHead} source={{uri:this.props.image}} />
                <View style={[styles.flex,styles.row]}>
                    <Text style={[styles.fz11,styles.black]}>{this.props.phone}</Text>
                </View>
                <View style={[styles.flex,styles.row]}>
                    <Text style={[styles.fz11,styles.black]}>{this.props.message}</Text>
                </View>
                <View style={[styles.flex,styles.row,styles.right]}>
                    <Text style={[styles.fz11,styles.gray]}>{this.props.time}</Text>
                </View>
            </View>
        )
    }

}


const styles=StyleSheet.create({
    row:{
      flexDirection:'row'
    },
    flex:{
        flex:1
    },
    fz11:{
        fontSize:11*Util.pixel
    },
    gray:{
        color:'#808080',
    },
    black:{
        color:'#000'
    },
    right:{
        justifyContent:'flex-end'
    },
    record:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        paddingBottom:11*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
    },
    recordItems:{
        height: 27 * Util.pixel,
        alignItems:'center',
        marginTop:12* Util.pixel,
    },
    recordHead: {
        width: 27 * Util.pixel,
        height: 27 * Util.pixel,
        borderRadius: 30 * Util.pixel,
        marginRight:8 * Util.pixel,
    }
})