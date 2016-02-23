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
    TouchableOpacity
} from 'react-native';
import Util from './../common/util';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TabProduction from './ProjectDetailsTabProduction';
import TabProgress from './ProjectDetailsTabProgress';
import TabDiscuss from './ProjectDetailsTabDiscuss';




export default class ProjectDetailsTab extends Component {
    render(){
        return(
            <View style={styles.flex}>
                <ScrollableTabView tabBarUnderlineColor="000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                    <TabProduction tabLabel="作品详情"/>
                    <TabProgress tabLabel="项目进度"/>
                    <TabDiscuss tabLabel="用户评论"/>
                </ScrollableTabView>
            </View>
        )
    }
}



const styles=StyleSheet.create({
   flex:{
       flex:1
   }
})