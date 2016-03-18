
'use strict';
import React, { Component } from 'react-native';
import FinanItem from './financItem';

const {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text  
} = React;

class financing extends Component {
    constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), // 先初始化一个空的数据集合
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
  return (
    <ListView
      style={styles.container}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow} />
  );
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
