/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Text,
} from 'react-native';
import Login from './appView/login/login';
import project from './appView/projects/project';
import segSucceed from './appView/login/regSucceed';
import register from './appView/login/register';
import ReactNativeDemo from './appView/util/pickIamge';
import forget from './appView/login/forgetPwd';
import tabMain from './appView/tabbar/tabMain';
import projectDetails from './appView/projects/projectDetails';
import Navigation from './appView/common/navigation';


class App extends Component{
	render() {
		return (
      < Navigation  component={tabMain} />
		);
	}
}
AppRegistry.registerComponent('TestApp', () => App);