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
import Title from './ProjectDetailsTitle';


export default class ProjextDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:Util.size.width-24*Util.pixel
        };
    }


    render(){
        let wSzie=Math.floor((this.state.width/592)*100);
        return(
            <View style={[styles.viewc]}>
                <Title initObj={{title:'项目详情'}} />
                <Image style={[styles.viewcImg,{width:this.state.width,height:175*wSzie/100}]} source={require('./../image/details/flowImg.png')} />
                <View>
                        <Text style={[styles.fz11,styles.text1]}>投资说明：</Text>
                        <Text style={[styles.fz11,styles.text1]}>1、用户投资金额达到目标后，大师开始制作商品，过程中，大师会定期发布项目进展动态。</Text>
                        <Text style={[styles.fz11,styles.text1]}>2、制作完成后，商品进行拍卖，所拍得金额将按照投资者所投资比例全部发到所有投资者手中。</Text>
                        <Text style={[styles.fz11,styles.text1]}>3、若商品在拍卖过程中流拍，我们将在所有投资者中抽出一位幸运者，送出商品（一个公开的东西）。</Text>
                        <Text style={[styles.fz11,styles.text2]}>注：用户投资回报=拍品价格*（投资金额/目标金额）</Text>
                </View>
            </View>
        )
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
        fontSize:11*Util.pixel
    },
    text1:{
        color:'#808080',
        lineHeight:12
    },
    text2:{
        color:'#000'
    },
    viewc:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        paddingBottom:11*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
    },
    viewcImg:{
        marginTop:13*Util.pixel,
        marginBottom:20*Util.pixel,
    }
})