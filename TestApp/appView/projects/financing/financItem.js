
'use strict';
import React, { Component } from 'react-native';
import {HeadMaster,ProgressBar} from './../../common/business';

const {
  StyleSheet,
  View,
  Image,
  Text,
  PixelRatio
} = React;

//产品图片组件
class ImgModule extends React.Component{
    render(){
        return(
            <View style={styles.box} >
                <Image style={styles.im} source={{uri:this.props.pic}}/>
                <View style={styles.imView}>
                    <Text style={styles.imViewTitle}>{this.props.title}</Text>
                    <Text style={styles.imViewDes} numberOfLines={2}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

class financItem extends Component {
  render() {
    var atr=this.props.item.artwork;
    return (
      <View style={styles.viewHeight}>
          <ImgModule
              pic={atr.picture_url}
              title={atr.id}
              description={atr.brief}
           />
           <HeadMaster newObj={{
               name:'朱炳仁',
               description:'铜雕技艺国家级传承人',
               pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
           }}/>

            <ProgressBar newObj={{
                group1Num:'3002元',
                group1Text:'目标金额',
                group2Num:'24时24分24秒',
                group2Text:'剩余时间',
                group3Num:'10000',
                group3Text:'投资人数',
            }}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
	viewHeight:{
    paddingTop:10,
    paddingBottom:20,
    borderBottomColor:'#000',
    borderBottomWidth:1 / PixelRatio.get()
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
        backgroundColor:'#fff0',
        color:'#fff',
        position:'absolute',
        bottom:68,
        left:0
    },
    imViewDes:{
        width:200,
        lineHeight:18,
        backgroundColor:'#fff0',
        color:'#fff',
        fontSize:9,
        position:'absolute',
        bottom:23,
        left:0,
    },
});


export default financItem;
