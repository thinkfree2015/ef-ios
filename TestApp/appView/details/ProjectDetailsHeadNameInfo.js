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
import ProjectDetailsMeltAmount from './ProjectDetailsHeadNameInfoMeltAmount';


export default class HeadNameInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active:'false'
        };
    }

    onkeyDown(){
        this.setState({active:!this.state.active});
    }

    render(){
        return(
            <View style={styles.info}>
                <TouchableOpacity style={styles.infoTouch}>
                    <View style={styles.infoHead}>
                        <Image style={styles.infoHeadImg} source={require('./../upload/userImg.png')} />
                        <Text style={styles.infoHeadText}>朱炳仁</Text>
                        <View style={styles.infoHeadLine}></View>
                        <Text style={styles.infoHeadText} numberOfLines={1}>铜雕技艺国家级传承人</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoCon}>
                        <Text style={styles.infoConText} numberOfLines={this.state.active?4:40}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={styles.infoConSelect} onPress={this.onkeyDown.bind(this)} >
                        {
                            this.state.active?<View style={[styles.infoConSelectIcon]}></View>:<View style={[styles.infoConSelectIcon,styles.infoConSelectIconActive]}></View>
                        }
                        </TouchableOpacity>
                </View>


                <ProjectDetailsMeltAmount />
            </View>
        )
    }



}


const styles=StyleSheet.create({
    flex:{flex:1},
    info:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2'
    },
    infoHead:{
        height:27*Util.pixel,
        alignItems:'center',
        marginTop:13*Util.pixel,
        marginBottom:13*Util.pixel,flexDirection:'row'
    },
    infoHeadImg:{
        width:27*Util.pixel,
        height:27*Util.pixel,
        marginRight:8*Util.pixel,
        borderRadius:100*Util.pixel,
    },
    infoHeadText:{fontSize:11*Util.pixel,color:'#000'},
    infoHeadLine:{
        width:1*Util.pixel,
        height:8*Util.pixel,
        backgroundColor:'#000',
        marginTop:1*Util.pixel,
        marginLeft:6*Util.pixel,
        marginRight:6*Util.pixel,
    },
    infoCon:{
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2'
    },
    infoConText:{
        fontSize:10*Util.pixel,
        lineHeight:15*Util.pixel,
        color:'#808080'
    },
    infoConSelect:{
        height:15*Util.pixel,
        alignItems:'center',
        marginTop:6*Util.pixel,
        marginBottom:6*Util.pixel,
    },
    infoConSelectIcon:{
        borderLeftWidth:2*Util.pixel,
        borderBottomWidth:2* Util.pixel,
        width:15*Util.pixel,
        height:15*Util.pixel,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
        marginLeft:3*Util.pixel,
        marginTop:-3,
    },
    infoConSelectIconActive:{
        transform: [{rotate: '135deg'}],
        marginTop:5*Util.pixel,
    },

})