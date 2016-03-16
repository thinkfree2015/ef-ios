/**
 * Created by jiuxuan00 on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,ListView,TouchableOpacity} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0,Header,LayoutBtn,IconDiscuss} from './../common/styles';
import {TopImg,HeadMaster,TitleBar,DiscussMod,ProgressBar,InvestorsRecord,ArtworkDetails,StickyBottom} from './../common/business';


//主页面
export default class ProjextDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:'false',
        };
    }
    onkeyDown(){
        this.setState({active:!this.state.active});
    }
    render(){
        let wSzie=Math.floor((this.state.width/592)*100);
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'逐鹿顺意铜雕'}
                    BackIcon={true}
                    ShareIcon={true}
                />
                <ScrollView>
                    {/*大图*/}
                    <TopImg
                        text={'逐鹿顺意铜雕'}
                        pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                    />
                    {/*大师头像、名字、描述*/}
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    {/*大师头像下面的描述*/}
                    <View style={[styles0.ml12,styles0.mr12,styles0.btmbor,styles.des_box]}>
                        <Text style={[styles0.fz10,styles0.gray,styles.des_text]} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={[styles0.center,styles0.mt6,styles.des_select]} onPress={this.onkeyDown.bind(this)} >
                            {this.state.active?<View style={[styles0.arrow,styles.des_arrow]}></View>:<View style={[styles0.arrow,styles.des_arrow,styles.des_arrowTop]}></View>}
                        </TouchableOpacity>
                    </View>
                    {/*预计完成时间*/}
                    <View style={[styles0.row,styles0.center,styles0.pl12,styles0.pr12,styles0.btmbor,{height:37}]}>
                        <Text style={[styles0.fz12,styles0.black]}>预计完成时间：3月10日   </Text>
                        <Text style={[styles0.fz12,styles0.black]}>敬请期待</Text>
                    </View>
                    {/*项目进度*/}
                    <View style={[styles0.pl12,styles0.pr12,styles0.mt12,styles0.btmbor,styles0.topbor,styles.xm_gress]}>
                        <View style={styles0.btmbor}>
                            <TitleBar
                                title={'项目进度'}
                            />
                        </View>
                        <View style={[styles.jd_items]}>
                            {/*抽奖*/}
                            <View style={[styles0.mt6,styles0.mt12]}>
                                <Text style={styles0.fz11}>
                                    <Text style={styles0.black}>抽奖</Text><Text>（若流拍）</Text><Text>敬请期待</Text>
                                </Text>
                            </View>
                            {/*拍卖*/}
                            <View style={[styles0.mt6,styles0.mb6]}>
                                <Text style={styles0.fz11}>
                                    <Text style={styles0.black}>拍卖  </Text><Text>敬请期待</Text>
                                </Text>
                            </View>
                            {/*项目状态*/}
                            <View style={[styles0.mt6,styles0.mb6]}>
                                <Text style={[styles0.fz11,styles0.black]}>项目状态：</Text>
                                <Text style={styles0.fz11}>更多制作过程持续更新中...</Text>
                            </View>
                            <View style={[styles0.mt6,styles0.mb6]}>
                                <Text style={[styles0.fz11,styles0.black]}>02月25日08点</Text>
                                <Text style={[styles0.fz11]}>我已经开始上色了。</Text>
                            </View>
                            <Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                            <View style={[styles0.mt6,styles0.mb6]}>
                                <Text style={[styles0.fz11,styles0.black]}>02月22日08点</Text>
                                <Text style={styles0.fz11}>我已经开始烧制了，烧制是最为关键的一步，若烧制失败，作品就功亏一篑了。</Text>
                            </View>
                            {/*创作*/}
                            <View style={[styles0.mt6,styles0.mb6]}>
                                <Text style={styles0.fz11}>
                                    <Text style={styles0.black}>02月17日08点  </Text><Text>创作</Text>
                                </Text>
                            </View>
                            {/*融资*/}
                            <View style={[styles0.mt6,styles0.mb12]}>
                                <Text style={styles0.fz11}>
                                    <Text style={styles0.black}>02月14日14点  </Text><Text>融资</Text>
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/*作品详情、项目进度、用户评论*/}
                    <View style={[styles0.flex,styles0.mt9,styles0.topbor,{height:800}]}>
                        <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                            <TabProduction tabLabel="作品详情"/>
                            <TabInvestorsRecord tabLabel="投资记录" />
                            <TabDiscuss tabLabel="用户评论"/>
                        </ScrollableTabView>
                    </View>
                </ScrollView>

                {/*悬浮在底部的评论*/}
                <StickyBottom
                    buttonTwo={false}
                    btnOneText={'评论'}
                    btnOneIcon={IconDiscuss}
                />

            </View>
        )
    }
}


//------------->Tab---作品详情
class TabProduction extends React.Component{
    render(){
        return(
            <ArtworkDetails
                pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                describe={'作品的灵感来源，寓意及象征，作品创作的动态，作品的基本情况等相关内容。'}
            />
        )
    }
}

//------------->Tab---投资记录
class TabInvestorsRecord extends React.Component{
    render(){
        return(
            <View style={[styles0.pl12,styles0.pr12,styles0.pb12,styles0.btmbor]}>
                <TitleBar
                    title={'投资者'}
                    pepNum={true}
                    pepNumText={100+'人投资'}
                />
                <InvestorsRecord newObj={{
                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                    phone:'13964175327',
                    tzNum:'投资了100元',
                    time:'2016-01-20'
                }}/>
                <InvestorsRecord newObj={{
                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                    phone:'13964175327',
                    tzNum:'投资了100元',
                    time:'2016-01-20'
                }}/>
                <InvestorsRecord newObj={{
                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                    phone:'13964175327',
                    tzNum:'投资了100元',
                    time:'2016-01-20'
                }}/>
                <View style={[styles0.center]}>
                    <TouchableOpacity>
                        <View style={[styles0.arrow,styles0.aDown,styles.rd_aDown]}></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

//------------->Tab---用户评论
class TabDiscuss extends React.Component {
    render() {
        return (
            <View style={[styles0.flex,styles0.pl12,styles0.pr12,styles.discuss]}>
                <TitleBar
                    title={'评论'}
                />
                <View style={styles0.topbor}>
                    <DiscussMod
                        newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'Joe',
                            time:'2015-10-12 16:20',
                            description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                        }}
                        replayHide={false}
                        newReplay={{
                            anInfo:'Joe:我非常认同你的观点',
                        }}
                    />
                    <DiscussMod
                        newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'Joe',
                            time:'2015-10-12 16:20',
                            description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                        }}
                        replayHide={false}
                        newReplay={{
                            anInfo:'Joe:我非常认同你的观点',
                        }}
                    />
                </View>

            </View>
        );
    }
}




const styles=StyleSheet.create({
    des_box:{
        borderColor:'#e2e2e2'
    },
    des_text:{
        lineHeight:15
    },
    des_select:{
        height:15
    },
    des_arrow:{
        width:8,
        height:8,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
    },
    des_arrowTop:{
        transform: [{rotate: '135deg'}],
        marginTop:5,
    },
    //已投金额
    prog_view:{
        height:38,
    },
    //--------------->用户评论
    discuss:{
        borderBottomWidth:1,
        borderColor:'#e2e2e2'
    }
})
