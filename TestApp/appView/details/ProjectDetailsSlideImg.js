/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Util from './../common/util';

//顶部图片部分
export default class SlideImg extends Component {

    render(){
        let obj=this.props.initObj;
        return(
            <View>
                <Image style={styles.slideImg} source={{uri:obj.url}} />
                <View style={styles.slideView}>
                    <Text style={styles.slideText} numberOfLines={1}>{obj.title}</Text>
                </View>
            </View>
        )
    }

}


const styles=StyleSheet.create({
    /*-->顶部图片部分===start===<--*/
    slideImg:{
        height:320*Util.pixel,
        resizeMode:'cover',
        marginTop:9*Util.pixel
    },
    slideView:{
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
        position:'absolute',
        bottom:12*Util.pixel,
    },
    slideText:{
        fontSize:14*Util.pixel,
        color:'#fff',
    }
    /*-->顶部图片部分===End===<--*/

})
