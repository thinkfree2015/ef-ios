/**
 * Created by jiuxuan00 on 2016/2/1.
 */
import React, {Component,StyleSheet,Image,View,Text,ScrollView,TouchableOpacity,ListView,RefreshControl,TouchableHighlight} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {HeadMaster,ProgressBar} from './../common/business';
import {styles as styles0} from './../common/styles';
import RequestUtils from './../util/requestUtil';
import {putJson,getJson} from './../util/jsonUtil';
import Animation from './../projects/financing/Animation';
import projectDetails from './projectDetails';
import FinanItem from './../projects/financing/financItem';


//主页面
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                <FinancingList tabLabel="融资"/>
                <MakeList tabLabel="创作" />
                <AuctionList tabLabel="拍卖" />
                <AwardList tabLabel="抽奖" />
            </ScrollableTabView>
            </View>
        )
    }
}

//产品图片组件
class ImgModule extends React.Component{
    render(){
        return(
            <View style={styles.box}>
                <Image style={styles.im} source={{uri:this.props.pic}}/>
                <View style={styles.imView}>
                    <Text style={styles.imViewTitle}>{this.props.title}</Text>
                    <Text style={styles.imViewDes} numberOfLines={2}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

//文字部分组件
class TextLine extends React.Component{
    render(){
        return(
            <View style={[styles0.row,styles0.center,styles.pj_infoText]}>
                <View style={[styles0.vertical]}><Text style={[styles0.fz12,styles0.black]} numberOfLines={1}>{this.props.describe}</Text></View>
                <View style={[styles.circle,{backgroundColor:this.props.circleBg}]}></View>
            </View>
        )
    }
}

//融资
class FinancingList extends React.Component {
    constructor (props) {
        super(props)
        this.pageIndex = 0
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loadMore: false,
            isRefreshing: false,
            isError: false
        }
    }

    componentDidMount() {
        this._refresh();
    }
    getLoginJsonData(pageNum){
        var date = '';
        putJson('pageSize',pageNum);
        putJson('timestamp',new Date().getTime());
        putJson('pageNum','1')
        date = getJson();
        return date;
    }

    render() {
        this.state.isError = false
        return (
            <ListView
            style={{flex:1}}
            dataSource={this.state.dataSource}
            onEndReached={this._loadmore.bind(this)}
            renderFooter={this._renderFooter.bind(this)}
            renderRow={this.renderRow.bind(this)}
            onEndReachedThreshold = {29}
            refreshControl={
                    <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._refresh.bind(this)}
                    tintColor='#aaaaaa'
                    title='Loading...'
                    progressBackgroundColor='#aaaaaa'/>
            }/>
        );
    }

    _renderFooter () {
        return (
            this.state.loadMore
            ? (<View style={[styles.indicatorWrapper]}>
                <Animation timingLength = {50} duration = {500} bodyColor={'#aaaaaa'}/>
                </View>)
            : (<View/>)
            )
    }

    async _refresh () {
        if (this.state.isRefreshing) {
            return
        }
        this.setState({isRefreshing: true})
        this.pageIndex=2;
        RequestUtils.ajax({
            url:'http://192.168.1.69:8001/app/investorIndex.do',
            method: 'post',
            data:this.getLoginJsonData(this.pageIndex),
            success:(data)=>{
                if (data.resultCode==0) {
                    this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data.objectList),
                    isRefreshing: false
                 })
            }
        },
        failure:(data)=>{
            this.setState({
            isError: true,
            isRefreshing: false
            })}
        })
    }

    async _loadmore () {
        if (this.state.loadMore) {
            return
         }
        this.setState({loadMore: true})
        this.pageIndex += 2
        RequestUtils.ajax({
            url:'http://192.168.1.69:8001/app/investorIndex.do',
            method: 'post',
            data:this.getLoginJsonData(this.pageIndex),
            success:(data)=>{
            if (data.resultCode==0) {
                    this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data.objectList),
                    loadMore: false
             })
            }
        },
        failure:(data)=>{
            this.setState({
            isError: true,
            loadMore: false
            })}
        })
    }

    renderRow(contentData, sectionID, highlightRow){
        return(
            <TouchableHighlight onPress= {this._skipIntoContent.bind(this,contentData)
            }>
            <View style={styles.row}>
                <FinanItem item={contentData}></FinanItem>
            </View>
            </TouchableHighlight>)
    }

    _skipIntoContent (contentData) {
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: project,
                 title:'dd'
              })
    }

}

//创作
class MakeList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁2',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'最新一次更新：5分钟前'}
                                circleBg={'#f43531'}
                            />
                            <TextLine
                                describe={'预计完工：1月24日'}
                            />
                        </View>
                    </View>

                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁2',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'创作延时'}
                            />
                            <TextLine
                                describe={'预计完工：2月28日'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>



        )
    }
}
//拍卖
class AuctionList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'拍卖时间：3月10日 9:00——15:00'}
                            />
                        </View>
                    </View>


                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'正在拍卖中...'}
                            />
                            <TextLine
                                describe={'当前价格：10000元'}
                            />
                            <TextLine
                                describe={'出价次数：100次'}
                            />
                        </View>
                    </View>

                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'拍品得主：游客123'}
                            />
                            <TextLine
                                describe={'成交价：10000元'}
                            />
                        </View>
                    </View>


                </ScrollView>
            </View>



        )
    }
}

//抽奖
class AwardList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />

                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <View style={styles.pj_infoText}>
                                <Text style={[styles0.fz12,styles0.black]}>
                                    <Text>开奖倒计时：</Text>
                                    <Text style={styles0.fz18}>24</Text>
                                    <Text style={[styles0.fz10,styles0.gray]}>  小时  </Text>
                                    <Text style={styles0.fz18}>00</Text>
                                    <Text style={[styles0.fz10,styles0.gray]}>  分  </Text>
                                    <Text style={styles0.fz18}>00</Text>
                                    <Text style={[styles0.fz10,styles0.gray]}>  秒  </Text>
                                </Text>
                            </View>

                            <TextLine
                                describe={'拍品得主：游客123'}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>



        )
    }
}


const styles=StyleSheet.create({
   container: {
    flex: 1,
    marginTop: 20,
  },
    pj_items:{
        marginTop:8
    },
    pj_info:{
        paddingTop:8,
        paddingBottom:8,
    },
    pj_infoText:{
        height:24
    },
    pj_time:{
        position:'absolute',
        top:0,
        right:0
    },
    circle:{
        width:6,
        height:6,
        marginTop:-10,
        borderRadius:10,
        marginLeft:3
    },
    //图片组件
    im:{
        height:215,
    },
    imView:{
        marginLeft:17,
        marginRight:17
    },
    imViewTitle:{
        fontSize:16,
        color:'#fff',
        position:'absolute',
        bottom:68,
        left:0
    },
    imViewDes:{
        width:200,
        lineHeight:18,
        fontSize:9,
        color:'#fff',
        position:'absolute',
        bottom:23,
        left:0,
    },
     flex_1:{
        flex:1,
        marginTop:5,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    indicatorWrapper: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252528'
  },

})