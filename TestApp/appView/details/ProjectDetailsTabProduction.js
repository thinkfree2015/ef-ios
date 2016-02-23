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
import SlideImg from './ProjectDetailsSlideImg';


export default class TabProduction extends React.Component {


    render(){
        return(
              <View style={[styles.flex]}>
                  <View style={styles.viewa}>
                      <SlideImg initObj={{
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }}/>
                      <View style={styles.viewb}>
                          <Text style={styles.viewbText}>作品的灵感来源，寓意及象征，作品创作的动态，作品的基本情况等相关内容。
                              逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。</Text>
                      </View>
                  </View>
              </View>
        )
    }
}


const styles=StyleSheet.create({
   flex:{
       flex:1
   },
    viewa:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        paddingTop:3*Util.pixel, flex:1
    },
    viewb:{
        paddingTop:5*Util.pixel,
        paddingBottom:5*Util.pixel,
    },
    viewbText:{
        fontSize:11*Util.pixel,
        color:'#808080',
        lineHeight:12,
    },

})