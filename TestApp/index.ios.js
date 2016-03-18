/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Text,
    Navigator,
} from 'react-native';
import Login from './appView/login/login';
import project from './appView/projects/project';

class App extends Component{
	render() {
		return (
		<Navigator style = {{flex:1}}
        initialRoute={{
          component: Login
        }}
        renderScene={(route, navigator) => { // 用来渲染navigator栈顶的route里的component页面
          // route={component: xxx, name: xxx, ...}， navigator.......route 用来在对应界面获取其他键值
          return <route.component navigator={navigator} {...route} {...route.passProps}/>// {...route.passProps}即就是把passProps里的键值对全部以给属性赋值的方式展开 如：test={10}
        }}/>
		);
	}
}
AppRegistry.registerComponent('TestApp', () => App);