/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';
var GetTimesTamp = new Date().getTime();

import {putJson,getJson} from './../util/jsonUtil'
import hex_sha1 from './../util/sha1'
import MD5 from './../util/md5'
import project from './../projects/project';
import login from './../login/login'
//主页
export default class Register extends Component {
    getAudoJsonData =()=>{
        var date = '';
        putJson('username',this.state.inputPhone);
        putJson('timestamp',GetTimesTamp);
        console.log('获取短信的GetTimesTamp  ',GetTimesTamp);
        date = getJson();
        console.log('打印大');
        console.log('111111111111'+date);
        return date;
    }
    
    getAudoExamineJsonData =()=>{
        var date = '';
        putJson('timestamp',GetTimesTamp);
        console.log('短信验证的时间GetTimesTamp  ',GetTimesTamp);
        putJson('code','074597');
        putJson('username',this.state.inputPhone);
        date = getJson();
        console.log('打印大');
        console.log('111111111111'+date);
        return date;
    }
    
    getRegisterJsonData =()=>{
        console.log(this.state.inputPass);
        var date = '';
        putJson('username',this.state.inputPhone);
        putJson('timestamp',GetTimesTamp);
        putJson('password',this.state.inputPass);
        date = getJson();
        console.log('打印大');
        console.log('111111111111'+date);
        return date;
    }
    
    
    
    AuthRequest(){
        
        console.log('获取验证码日志');
        fetch('http://192.168.1.69:8001/app/checkUserName.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getAudoJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('验证码数据开始');
              console.log(responseText);
              console.log('  验证码我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
              this.sendMeg();
              }
              })
        .catch((error) => {
               console.log('验证码日 error 开始');
               console.warn(error);
               console.log('验证码日 error--------');
               });
    }
    
    sendMeg(){
        console.log('获取短信日志');
        console.log('美的     '+this.getAudoJsonData());
        fetch('http://192.168.1.69:8001/app/sendCode.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getAudoJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('短信数据开始');
              console.log(responseText);
              console.log('  短信我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
              
              }
              })
        .catch((error) => {
               console.log('短信 error 开始');
               console.warn(error);
               console.log('短信 error--------');
               });
    }
    examineSendMeg(){
        console.log('获取短信验证日志');
        console.log('美的     '+this.getAudoExamineJsonData());
        fetch('http://192.168.1.69:8001/app/verifyCode.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getAudoExamineJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('短信数据验证开始');
              console.log(responseText);
              console.log('  短信验证我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
              }
              })
        .catch((error) => {
               console.log('短信验证 error 开始');
               console.warn(error);
               console.log('短信验证 error--------');
               });
    }
    
    registerThings(){
        console.log('获取注册日志');
        console.log('注册美的     '+this.getRegisterJsonData());
        fetch('http://192.168.1.69:8001/app/register.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getRegisterJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('注册数据开始');
              console.log(responseText);
              console.log('  注册我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
                this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: project,
                title: 'r',
              })
              }
              })
        .catch((error) => {
               console.log('注册 error 开始');
               console.warn(error);
               console.log('注册 error--------');
               });
        
    }
    NavigatorSkipToLogin(){
        console.log('跳转到主页');
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: login,
        
              })
    }
    render() {
        return (
            <View style={styles.login}>

                <Header
                    title={'快速注册'}
                    BackIcon={true}
                />
                <LoginInput newObj={{
                    placeholder:'请输入手机号'
                }} onChangeText={(text) => this.setState({inputPhone:text})}/>
                <Authcode
                    newObj={{text:'获取验证码'}}
                onPress={(this.AuthRequest.bind(this))}
                />
                <LoginInput newObj={{placeholder:'请输入密码'}}
                onChangeText={(text) => this.setState({inputPass1:Text})}
                />
                <LoginInput newObj={{placeholder:'请再次输入密码'}} onChangeText={(text) => this.setState({inputPass:Text})}/>
                <LoginButton newObj={{text:'注     册'}} onPress={(this.registerThings.bind(this))}/>

                <View style={[styles0.flex,styles0.row,styles.btn_view]}>
                    <TouchableOpacity style={[styles0.right,styles0.flex,styles.login_text]}>
                        <Text style={[styles0.fz11,styles0.color3b]} onPress={this.NavigatorSkipToLogin.bind(this)}>立即登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}





const styles=StyleSheet.create({
    btn_view:{
        marginRight:22,
        marginTop:15
    },
});