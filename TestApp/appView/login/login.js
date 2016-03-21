/**
 * Created by qiuxi on 2016/2/25.
 this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: project,
                title: 'r',
              })



              var USERNAME_KEY_ONE = '@TestApp:key_one';
var USERPWD_KEY_ONE = '@TestApp:key_message';
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Navgator,
    TouchableHighligt,
    NavigatorIOS,
    AsyncStorage,
} from 'react-native';

import {styles as styles0,Header,LogoWechat,LogoSina,LogoQQ} from './../common/styles';
import {LoginInput,LoginButton} from './../common/nobusiness';
import {putJson,getJson} from './../util/jsonUtil';
import hex_sha1 from './../util/sha1';
import MD5 from './../util/md5';

import project from './../projects/project';
import register from './../login/register';
import forgetPwd from './../login/forgetPwd';
import RequestUtils from './../util/requestUtil';
var GetTimesTamp = new Date().getTime();
var USERNAME_KEY_ONE = '@TestApp:key_one';
var USERPWD_KEY_ONE = '@TestApp:key_message';

//主页
export default class Login extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputVCode:''
            
        };
    }
    
    getLoginJsonData =()=>{
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
         this.props._saveValue_One;
        fetch('http://192.168.1.69:8001/app/login.do', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.getLoginJsonData())
              })
        .then((response) => response.json())
        .then((responseText) => {
              console.log('login数据开始');
              console.log(responseText);
              console.log('  login我爱你  '+responseText.resultCode);
              if(responseText.resultCode ==0){
                console.log('跳转到主页');
                this.props._saveValue_One;
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
    
    
    NavigatorSkipToProject(){
        console.log('跳转到主页');
        RequestUtils.getContents();

    }
    NavigatorSkipToRegister(){
        console.log('跳转到主页');
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: register,
        
              })
    }
    
    NavigatorSkipToForgetPwd(){
        console.log('跳转到主页');
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                component: forgetPwd,
              })
    }
    
    async _saveValue_One(){
      try{
        await AsyncStorage.setItem(USERNAME_KEY_ONE,this.state.inputPhone);
         await AsyncStorage.setItem(USERPWD_KEY_ONE,this.state.inputPass);
         var value=await AsyncStorage.getItem(USERNAME_KEY_ONE);
         console.log('/////'+value);
      }catch(error){
          console.log(error);
      }
  }
    render() {
        return (

            <View style={styles.login}>
                <Header
                    title={'登录'}
                    BackIcon={true}
                />
                <LoginInput newObj={{placeholder:'请输入手机号/e飞蚁账号'}} onChangeText={(text) => this.setState({inputPhone:text})}/>
                <LoginInput newObj={{placeholder:'请输入密码'}} onChangeText={(text) => this.setState({inputPass:text})}/>
                <LoginButton newObj={{text:'登     录'}} onPress={(this._saveValue_One.bind(this))}/>
                <View style={[styles0.flex,styles0.row,styles.login_p]} >
                    <TouchableOpacity style={[styles0.left,styles0.flex,styles.login_text]}>
                        <Text style={[styles0.fz11,styles0.gray]} onPress={(this.NavigatorSkipToRegister.bind(this))} >快速注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles0.right,styles0.flex,styles.login_text]} >
                        <Text style={[styles0.fz11,styles0.color3b]} onPress={this.NavigatorSkipToForgetPwd.bind(this)}>忘记密码</Text>
                    </TouchableOpacity>

                </View>

                <View style={[styles0.flex,styles.login_p]}>
                    <View style={[styles0.row,styles0.center,styles0.flex,styles.login_pTxt]}>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                        <View style={[styles0.flex,styles0.center]}><Text style={[styles.fz11,styles.gray]}>快速登录</Text></View>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                    </View>
                    <View style={[styles0.row,styles0.center,styles0.vertical]}>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoWechat} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoSina} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoQQ} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    login_p:{
        marginLeft:22,
        marginRight:22,
    },
    login_pTxt:{
        marginTop:25,
        marginBottom:12,
    },
    login_pLine:{
        height:1,
        borderColor:'#e4e4e4',
    },
    login_pLogo:{
        width:35,
        height:35,
        resizeMode:'contain',
    },
    login_text:{
        marginTop:15
    }
});


