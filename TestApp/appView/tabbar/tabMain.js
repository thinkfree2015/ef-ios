'use strict';

import React, { Component } from 'react-native';
import TabBar from './TabBar';
import TabGroup from './TabGroup';
import Home from '../projects/project';
import Navigation from '../common/navigation';

const {
  StyleSheet,
  Text,
  View,
} = React;

class tabMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 3,
      badges: [null, null, ' ', 99],
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.halfContiner}>
          <TabBar onSelectedChange={this.onSelectedChange.bind(this)}>
            <TabBar.Item
              icon={require('./start_normall.png')}
              selectedIcon={require('./start_hightlight.png')}
              selected={true}
              badge={this.state.badges[0]}
              title='首页' >
              <Home navigator={this.props.navigator} />
            </TabBar.Item>
            <TabBar.Item
              icon={require('./start_normall.png')}
              selectedIcon={require('./start_hightlight.png')}
              badge={this.state.badges[1]}
              title='发现' >
              <Text>1</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('./start_normall.png')}
              selectedIcon={require('./start_hightlight.png')}
              badge={this.state.badges[2]}
              title='消息' >
              <Text>2</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('./start_normall.png')}
              selectedIcon={require('./start_hightlight.png')}
              badge={this.state.badges[3]}
              title='我' >
              <Text>3</Text>
            </TabBar.Item>
          </TabBar>
        </View>
      </View>
    );
  }

  onSelectedChange(index) {
    let _badges = this.state.badges;
    if(_badges[index] !== null) {
      _badges[index] = null;
      this.setState({
        badges: _badges,
      });
    }
  }
}

let styles = StyleSheet.create({
  halfContiner: {
    flex: 1,
  }
});


export default tabMain;
