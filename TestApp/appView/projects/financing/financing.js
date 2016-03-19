
'use strict';
import React, { Component } from 'react-native';
import FinanItem from './financItem';

const {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  RefreshControl,  
} = React;

class financing extends Component {
    constructor (props) {
    super(props)
    this.pageIndex = 0
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), // 先初始化一个空的数据集合
      loadMore: false,
      isRefreshing: false,
      isError: false
    }
  }

  componentDidMount() {
    this.fetchData();
}

fetchData() {
  var REQUEST_URL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.result.data),
        });
    })
    .done();
}

render() {
  this.state.isError = false
  return (
    <ListView
      style={styles.container}
      dataSource={this.state.dataSource}
      onEndReached={this._loadmore.bind(this)}
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

  async _refresh () {
    if (this.state.isRefreshing) {
      return
    }
    this.setState({isRefreshing: true})

    try {
      this.dateArray = (await RequestUtils.getDateArray()).results
      this.pageIndex = 0
      let contentDataGroup = await RequestUtils.getContents(this.dateArray.slice(0, 10))
      if (typeof contentDataGroup === 'undefined') {
       return
      }
      console.log(contentDataGroup)
      this.setState({
        dataArray: contentDataGroup,
        dataSource: this.state.dataSource.cloneWithRows(contentDataGroup),
        isRefreshing: false
      })
    } catch (error) {
      console.log(error)
      this.setState({
        isError: true,
        isRefreshing: false
      })
    }

    // 异步方法的数据只能在回调方法里获取。await可以让它顺序执行
  }

async _loadmore () {
    if (this.state.loadMore) {
      return
    }

    this.setState({loadMore: true})
    console.log('===haha', this.state.loadMore)

    try {
      this.pageIndex += 10
      let pageDate = this.dateArray.slice(this.pageIndex, this.pageIndex + 10)

      let loadedContentGroup = await RequestUtils.getContents(pageDate)
      let newContent = [...this.state.dataArray, ...loadedContentGroup] // put elements in loadedContentGroup into dataArray

      this.setState({
        dataArray: newContent,
        dataSource: this.state.dataSource.cloneWithRows(newContent),
        loadMore: false
      })
    } catch (error) {
      console.log(error)
      this.setState({
        loadMore: false,
        isError: true
      })
    }
  }

renderRow(contentData, sectionID, highlightRow){
return(
  <View>
    <View style={styles.row}>
      <FinanItem></FinanItem>
    </View>
  </View>)
}

//结束
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex_1:{
  	flex:1,
  	marginTop:5,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
},
});


export default financing;
