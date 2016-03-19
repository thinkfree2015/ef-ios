/**
 * Created by qiuxi on 2016/2/25.
 this.sendMeg();
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';

import {putJson,getJson} from './../util/jsonUtil'
import hex_sha1 from './../util/sha1'
import MD5 from './../util/md5'

var GetTimesTamp = new Date().getTime();

//主页
export default class Login extends Component {
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
        putJson('code','332295');
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
        putJson('password',this.state.inputPhone);
        
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
              console.log('忘记密码通过可以发短信');
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

        console.log('111111111111'+date);
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
        
        console.log('获取忘记密码日志  '+this.state.inputPhone);
        console.log('获取忘记密码日志  '+this.state.inputPass);
        console.log('获取忘记密码日志  '+GetTimesTamp);
        
        
        console.log('忘记密码美的     '+this.getRegisterJsonData());
        fetch('http://192.168.1.69:8001/app/retrievePassword.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getRegisterJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('忘记密码数据开始');
              console.log(responseText);
              console.log('  忘记密码我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
              }
              })
        .catch((error) => {
               console.log('忘记密码 error 开始');
               console.warn(error);
               console.log('忘记密码 error--------');
               });
        
    }
       AuthcodeTest=()=>{
      console.log('自动发送验证');
    }
    render() {
        return (
                <View style={styles.login}>
                <Header
                title={'忘记密码'}
                BackIcon={true}
                />
                <LoginInput newObj={{
                placeholder:'请输入手机号'
                }} onChangeText={(text) => this.setState({inputPhone:text})}/>
                <Authcode newObj={{text:'请输入验证码'}} onPress={(this.examineSendMeg.bind(this))} 
                onBlur= {this.examineSendMeg.bind(this)} />
                <LoginInput newObj={{placeholder:'设置密码'}}
                 onChangeText={(text) => this.setState({inputPass:text})}
    
                />
                <LoginButton newObj={{text:'确     定'}} onPress={(this.registerThings.bind(this))}/>
                </View>
                )
    }
}





const styles=StyleSheet.create({
                               btn_view:{
                               marginRight:22,
                               marginTop:15
                               },
                               btn_text:{
                               color:'#3b99ff'
                               },
                               });
