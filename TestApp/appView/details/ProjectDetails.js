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
    ListView,
    TouchableOpacity
} from 'react-native';
import Util from './../common/util';


import Header from './../common/header';


import InvestmentFlow from './ProjectDetailsInvestmentFlow';
import InvestmentRecord from './ProjectDetailsInvestmentRecord';
import ProjectDetailsTab from './ProjectDetailsTab';
import Test from './test';


import TabProduction from './ProjectDetailsTabProduction';
import TabProgress from './ProjectDetailsTabProgress';
import TabDiscuss from './ProjectDetailsTabDiscuss';

//首图
export class TopImg extends Component {
    render(){
        let obj=this.props.newObj;
        return(
            <View>
                <Image style={styles_img.slideImg} source={{uri:obj.url}} />
                <View style={styles_img.slideView}>
                    <Text style={styles_img.slideText} numberOfLines={1}>{obj.title}</Text>
                </View>
            </View>
        )
    }
}
const styles_img=StyleSheet.create({
    slideImg:{
        height:320*Util.pixel,
        resizeMode:'cover',
        marginTop:9*Util.pixel
    },
    slideView:{
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
        position:'absolute',
        bottom:12*Util.pixel,
    },
    slideText:{
        fontSize:14*Util.pixel,
        color:'#fff',
    }
})
//大师头像+名称
export class HeadMaster extends  React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles_hm.info}>
                <View style={[styles.row,styles_hm.infoRow]}>
                    <Image style={styles_hm.infoRowImg} source={{uri:obj.url}} />
                    <Text style={[styles.fz11,styles.black]}>{obj.name}</Text>
                    <View style={styles_hm.line}></View>
                    <Text style={[styles.flex,styles.fz11,styles.black]} numberOfLines={1}>{obj.description}</Text>
                </View>
            </View>
        )
    }
}
const styles_hm=StyleSheet.create({
    info:{
        height:54*Util.pixel,
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
    },
    infoRow:{
        height:27*Util.pixel,
        alignItems:'center',
        marginTop:13*Util.pixel,
        marginBottom:13*Util.pixel,
    },
    infoRowImg:{
        width:27*Util.pixel,
        height:27*Util.pixel,
        marginRight:8*Util.pixel,
        borderRadius:100*Util.pixel,
    },
    line:{
        width:1*Util.pixel,
        height:8*Util.pixel,
        backgroundColor:'#000',
        marginTop:2*Util.pixel,
        marginLeft:10*Util.pixel,
        marginRight:10*Util.pixel,
    },
})

export class TitleBar extends React.Component {
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles.titleBar}>
                <Text style={[styles.fz12,styles.black]} numberOfLines={1}>{obj.title}</Text>
            </View>
        )
    }
}






export default class ProjextDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:'false',
            width:Util.size.width-24*Util.pixel
        };
    }
    onkeyDown(){
        this.setState({active:!this.state.active});
    }

    render(){
        let wSzie=Math.floor((this.state.width/592)*100);
        return(
            <View style={[styles.flex]}>
                <Header initObj={{title:'项目详情'}} />
                <ScrollView>
                    <TopImg newObj={{
                        title:'逐鹿顺意铜雕',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                    <View style={[styles.viewa,styles.retract12]}>
                        <Text style={styles.viewaText} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={styles.viewaSelect} onPress={this.onkeyDown.bind(this)} >
                            {
                                this.state.active?<View style={[styles.viewaSelectIcon]}></View>:<View style={[styles.viewaSelectIcon,styles.viewaSelectIconActive]}></View>
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.row,styles.viewb]}>
                        <TouchableOpacity style={[styles.row,styles.flex]}>
                            <Text style={[styles.fz12,styles.black]}>投资金额</Text>
                            <View style={[styles.right,styles.flex]}>
                                <View style={styles.viewbArrowRight}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewc]}>
                        <TitleBar newObj={{title:'项目详情'}} />
                        <Image style={[styles.viewcImg,{width:this.state.width,height:175*wSzie/100}]} source={require('./../image/details/flowImg.png')} />
                        <View>
                            <Text style={[styles.fz11,styles.text1]}>投资说明：</Text>
                            <Text style={[styles.fz11,styles.text1]}>1、用户投资金额达到目标后，大师开始制作商品，过程中，大师会定期发布项目进展动态。</Text>
                            <Text style={[styles.fz11,styles.text1]}>2、制作完成后，商品进行拍卖，所拍得金额将按照投资者所投资比例全部发到所有投资者手中。</Text>
                            <Text style={[styles.fz11,styles.text1]}>3、若商品在拍卖过程中流拍，我们将在所有投资者中抽出一位幸运者，送出商品（一个公开的东西）。</Text>
                            <Text style={[styles.fz11,styles.text2]}>注：用户投资回报=拍品价格*（投资金额/目标金额）</Text>
                        </View>
                    </View>





                    <InvestmentRecord />

                    <Test />

                </ScrollView>




            </View>
        )
    }




}


//----------> common ------------
const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    center:{alignItems:'center'},
    right:{alignItems:'flex-end'},
    fz10:{fontSize:10*Util.pixel},
    fz11:{fontSize:11*Util.pixel},
    fz12:{fontSize:12*Util.pixel},
    fz18:{fontSize:18*Util.pixel},
    black:{color:'#000'},
    gray:{color:'#666'},
    retract12:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
    },
    titleBar:{
        height:37*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
        alignItems:'center',
        flexDirection:'row',
    },
    //--------------->文字
    viewa:{
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2'
    },
    viewaText:{
        fontSize:10*Util.pixel,
        lineHeight:15*Util.pixel,
        color:'#808080'
    },
    viewaSelect:{
        height:15*Util.pixel,
        alignItems:'center',
        marginTop:6*Util.pixel,
        marginBottom:6*Util.pixel,
    },
    viewaSelectIcon:{
        borderLeftWidth:2*Util.pixel,
        borderBottomWidth:2* Util.pixel,
        width:15*Util.pixel,
        height:15*Util.pixel,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
        marginLeft:3*Util.pixel,
        marginTop:-3,
    },
    viewaSelectIconActive:{
        transform: [{rotate: '135deg'}],
        marginTop:5*Util.pixel,
    },
    //--------------->投资流程
    viewc:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        paddingBottom:11*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
    },
    viewcImg:{
        marginTop:13*Util.pixel,
        marginBottom:20*Util.pixel,
    },



    viewb:{
        height:42*Util.pixel,
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        marginTop:9*Util.pixel,
        marginBottom:9*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
        alignItems:'center'
    },
    viewbArrowRight:{
        borderLeftWidth:1*Util.pixel,
        borderBottomWidth:1* Util.pixel,
        width:10*Util.pixel,
        height:10*Util.pixel,
        transform: [{rotate: '-135deg'}],
        borderColor:'#333',
        marginTop:3*Util.pixel,
        marginRight:2*Util.pixel,
    }




})