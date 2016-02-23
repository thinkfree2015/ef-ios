/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ListView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Util from './../common/util';
import Titlte from './ProjectDetailsTitle';


var NEWS_LIST_API_URL = 'http://88.studyteam.sinaapp.com/rnn/news_list.json';
//项目进度
export default class TabProductionDiscuss extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2
            }),
            loaded : false,
        };
    }
    componentDidMount () {
        this.fetchData();
    }
    fetchData() {
        fetch(NEWS_LIST_API_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(responseData),
                    loaded : true,
                });
            })
            .done();
    }

    render() {
        return (
            <View style={[styles.flex,styles.discuss]}>
                <Titlte initObj={{title:'评论'}} />
                <ListView
                    pageSize={2}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews}
                    style={styles.listView} />
            </View>
        );
    }

    renderNews(news) {
        return (
            <View style={styles.disItems}>
                <Image style={styles.disItemsImg} source={{uri:news.pic}} />
                <View style={styles.disItemsInfo}>
                    <Text style={[styles.fz11,styles.black]}>{news.title}</Text>
                    <Text style={[styles.fz11,styles.gray]}>2015-10-12   16:16</Text>
                    <Text style={[styles.fz11,styles.black]} numberOfLines={2}>{news.summary}</Text>
                </View>
            </View>
        );
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
        lineHeight:12,
    },
    black:{
        color:'#000'
    },
    gray:{
        color:'#808080'
    },
    discuss:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2'
    },
    disItems:{
        paddingLeft:52*Util.pixel,
        marginTop:12*Util.pixel,
    },
    disItemsImg:{
        width:30*Util.pixel,
        height:30*Util.pixel,
        borderRadius:30*Util.pixel,
        position:'absolute',
        top:0,
        left:12*Util.pixel,
    }

})