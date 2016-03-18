/**
 * Created by qiuxi on 2016/2/25.
 
 <View style={[styles0.alert,{width:sizeWidth,height:sizeHeight}]}>
 <View style={[styles.popup_box,{width:sizeWidth-24}]}>
 <TouchableOpacity style={[styles0.vertical,styles0.center,styles0.btmbor,styles.modbtn,{height:45,flex:1}]}>
 <Text style={[styles0.fz12,styles0.black]}>男</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles0.vertical,styles0.center,{height:45,flex:1}]}>
 <Text style={[styles0.fz12,styles0.black]}>女</Text>
 </TouchableOpacity>
 </View>
 </View>
 */
import React, {Component,StyleSheet,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import {styles as styles0,Header,ArrowRight,sizeWidth,sizeHeight} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';
import project from './../projects/project';



//注册成功后的组件
export default class regSucceedView extends Component {
     getregSucceedJsonData =()=>{
        var date = '';
        putJson('username',this.state.inputPhone);
        putJson('timestamp',GetTimesTamp);
        putJson('password',this.state.inputPass)
        console.log('获取登陆的GetTimesTamp  ',GetTimesTamp);
        date = getJson();
        console.log('打印大');
        console.log('111111111111'+date);
        return date;
    }
    fetchData() {
        console.log('执行fetchLoginData方法');
        fetch('http://192.168.1.69:8001/app/login.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getregSucceedJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('login数据开始');
              console.log(responseText);
              console.log('  login我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
                console.log('跳转到主页');
                this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: project,
        
              })
              }
              })
        .catch((error) => {
               console.log('login日 error 开始');
               console.warn(error);
               console.log('login日 error--------');
               });
    }
    completePress(){

        console.log('登陆测试成功');
    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'基本资料'}
                    complete={onPress={(this.completePress.bind(this))}}
                />
                <View style={[styles0.center,styles0.pt12,styles0.pb12,styles0.topbor,styles0.btmbor,styles0.mt9,styles.l_head]}>
                    <TouchableOpacity style={[styles0.vertical,styles0.center,styles.l_head_btn]}>
                        <Image style={styles.l_head_img} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                        <Text style={[styles0.fz10,styles0.white,styles.l_head_txt]}>添加头像</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.row,styles0.center,styles0.mt9,styles.xx_items]}>
                    <View style={styles0.vertical}>
                        <Text style={[styles0.black,styles0.fz12,styles.xx_text]}>昵称</Text>
                    </View>
                    <View style={styles.xx_ipt}>
                        <TextInput underlineColorAndroid='transparent' maxLength={8} style={[styles0.flex,styles0.fz12,styles0.gray,{textAlign:"right",width:500}]} defaultValue='三大打算三大打算' />
                    </View>
                    <View style={[styles0.right,styles0.flex]}>
                        <View style={[styles0.arrow,styles.arrow]}></View>
                    </View>
                </TouchableOpacity>

                <View style={[styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.row,styles0.center,styles0.mt9,styles.xx_items]}>
                    <View style={styles0.vertical}>
                        <Text style={[styles0.black,styles0.fz12,styles.xx_text]}>性别</Text>
                    </View>
                    <View style={[styles0.vertical,styles.xx_ipt]}>
                        <Text style={[styles0.fz12,styles0.gray,{textAlign:"right"}]}>女</Text>
                    </View>
                    <View style={[styles0.right,styles0.flex]}>
                        <View style={[styles0.arrow,styles.arrow]}></View>
                    </View>
                </View>
                
                <View style={[styles0.alert,{width:sizeWidth,height:sizeHeight}]}>
                <View style={[styles.popup_box,{width:sizeWidth-24}]}>
                <TouchableOpacity style={[styles0.vertical,styles0.center,styles0.btmbor,styles.modbtn,{height:45,flex:1}]}>
                <Text style={[styles0.fz12,styles0.black]}>男</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles0.vertical,styles0.center,{height:45,flex:1}]}>
                <Text style={[styles0.fz12,styles0.black]}>女</Text>
                </TouchableOpacity>
                </View>
                </View>
                
            </View>
        )
    }
}





const styles=StyleSheet.create({
    l_head_btn:{
        width:53,
        height:53,
    },
    l_head_img:{
        width:53,
        height:53,
        borderRadius:50
    },
    l_head_txt:{
        position:'absolute',
        top:20,
        left:7
    },
    //通栏按钮(白色背景、上下边框、右侧箭头)
    xx_items:{
        borderColor:'#e2e2e2',
        height:42
    },
    xx_text:{
        marginLeft:7
    },
    xx_ipt:{
        width:100,
        height:39,
        position:'absolute',
        top:0,
        right:26,
        alignItems:'flex-end'
    },
    arrow:{
        transform: [{rotate: '-135deg'}],
        borderColor:'#d0d0d0'
    },
    //性别弹出框
    popup_box:{
        position:'absolute',
        bottom:40,
        left:12,
        borderRadius:10,
        backgroundColor:'#fff'
    }


});