/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Util from './../common/util';

//进度条
export class ProgressModule extends React.Component {
    render(){
        return(
            <View>
                <View style={[styles.row,styles.progress]}>
                    <View style={[styles.flex,styles.row,styles.progressBg]}>
                        <View style={[styles.progressBgLine,{width:200}]}></View>
                        <View style={styles.progressBgIcon}></View>
                    </View>
                    <View style={styles.progressText}><Text style={[styles.fz11,styles.black]}>90%</Text></View>
                </View>


                <View style={[styles.arguments,styles.row]}>
                    <View style={[styles.flex,styles.left]}>
                        <Text style={[styles.fz12,styles.black]}>3000元</Text>
                        <Text style={[styles.fz11,styles.gray]}>目标金额</Text>
                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={[styles.fz12,styles.black]}>24时24分24秒</Text>
                        <Text style={[styles.fz11,styles.gray]}>剩余时间</Text>
                    </View>
                    <View style={[styles.flex,styles.right]}>
                        <Text style={[styles.fz12,styles.black]}>10000</Text>
                        <Text style={[styles.fz11,styles.gray]}>投资人数</Text>
                    </View>
                </View>
            </View>

        )
    }
}


export default class MeltAmount extends React.Component {

    render(){
        return(
            <View style={styles.amount}>
                <View style={[styles.row,styles.amountText]}>
                    <Text style={styles.fz11}>已融金额 ：</Text>
                    <Text style={[styles.fz14,styles.bold,styles.black]}>14000 </Text>
                    <Text style={styles.fz12}>元</Text>
                </View>
                <ProgressModule />
            </View>
        )
    }



}


const styles=StyleSheet.create({
    flex:{flex:1},
    row:{
        flexDirection:'row',
    },
    fz11:{
      fontSize:11*Util.pixel,
    },
    fz12:{
        fontSize:12*Util.pixel,
    },
    fz14:{
        fontSize:14*Util.pixel,
    },
    bold:{
        fontWeight:'bold'
    },
    black:{
      color:'#000'
    },
    gray:{
        color:'#808080'
    },
    left:{
        alignSelf:'flex-start'
    },
    center:{
        alignItems:'center',
    },
    right:{
        alignItems:'flex-end'
    },
    amountText:{
        height:37*Util.pixel,
        alignItems:'center',
    },
    progress:{
        height:10*Util.pixel,
    },
    progressBg:{
        height:6*Util.pixel,
        marginTop:2*Util.pixel,
        backgroundColor:'#e4e4e4',
    },
    progressBgLine:{
        height:6*Util.pixel,
        backgroundColor:'#000',
        marginRight:3*Util.pixel
    },
    progressBgIcon:{
        width:6*Util.pixel,
        height:6*Util.pixel,
        backgroundColor:'#000',
        transform: [{rotate: '45deg'}],
        marginLeft:-5*Util.pixel,
    },
    progressText:{
        width:47*Util.pixel,
        height:6*Util.pixel,
        justifyContent:'center',
        marginTop:1*Util.pixel,
        alignItems:'center'
    },

    amount:{
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
    },

    arguments:{
        marginLeft:10*Util.pixel,
        marginRight:10*Util.pixel,
        marginTop:14*Util.pixel,
        marginBottom:14*Util.pixel,
    },



})
