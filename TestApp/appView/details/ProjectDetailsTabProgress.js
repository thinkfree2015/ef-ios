/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Util from './../common/util';
import Titlte from './ProjectDetailsTitle';



//项目进度
export default class TabProductionProcess extends React.Component {

    render(){
        return(
            <View style={styles.process}>
                <Titlte initObj={{title:'项目进度'}} />
                <View style={styles.viewa}>
                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.black]}>目前，该项目已经开展了</Text>
                        <Text style={[styles.fz11,styles.black]}>24天59时59分</Text>
                        <View style={styles.line}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.textIcon]}>
                                <Image style={styles.textIconImg} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.black]}>融资</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.black]}>距离项目融资截止还有</Text>
                        <Text style={[styles.fz11,styles.black]}>24天59时59分</Text>
                        <View style={styles.line}></View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.black]}>项目目标金额</Text>
                        <Text style={[styles.fz11,styles.black]}>30000元</Text>
                        <View style={styles.line}></View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.black]}>项目目前融资金额</Text>
                        <Text style={[styles.fz11,styles.black]}>20000元</Text>
                        <View style={styles.line}></View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.line}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.textIcon]}>
                                <Image style={styles.textIconImg} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>创作</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.line}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.textIcon]}>
                                <Image style={styles.textIconImg} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>拍卖</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.line}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.textIcon]}>
                                <Image style={styles.textIconImg} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>抽奖</Text>
                            </View>
                        </View>
                    </View>



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
        fontSize:11*Util.pixel,
    },
    black:{
        color:'#000'
    },
    gray:{
        color:'#808080'
    },
    process:{
        marginTop:12*Util.pixel,
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2'
    },
    viewa:{
        paddingTop:10*Util.pixel,
        paddingBottom:10*Util.pixel,
    },
    viewaItems:{
        height:35*Util.pixel,
        alignItems:'center',
    },
    textIcon:{
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:4*Util.pixel,
        paddingBottom:4*Util.pixel,
    },
    textIconImg:{
        width:10*Util.pixel,
        height:10*Util.pixel,
        marginRight:5*Util.pixel,
    },
    line:{
        width:1,
        height:35*Util.pixel,
        backgroundColor:'#e2e2e2',
        position:'absolute',
        top:0,
        right:10*Util.pixel,
    }




})