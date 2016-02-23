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
import Items from './ProjectDetailsInvestmentRecordItems';




export default class ProjextDetails extends Component {
    constructor(props){
        super(props);
        var items = [
            {id:1,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175321',message:'投资了101元',time: '2016-01-01'},
            {id:2,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175322',message:'投资了102元',time:'2016-01-02'},
            {id:3,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175323',message:'投资了103元',time:'2016-01-03'},
            {id:4,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175323',message:'投资了104元',time:'2016-01-04'},
            {id:5,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175323',message:'投资了105元',time:'2016-01-05'},
            {id:6,url:'http://pro.efeiyi.com/product/%E7%89%A1%E4%B8%B9%E8%8A%B1%E8%AF%AD%E6%96%97%E7%AC%A0%E7%A2%9F20151225155256.jpg@!pc-recommend-list',phone:'13964175323',message:'投资了106元',time:'2016-01-06'},
        ];
        this.state= {
            items: items,
            active:'false',
            num:4,
        };

    }

    onkeyDown(){
        this.setState({active:!this.state.active});
    }

    render(){
        var Items1 = [];
        var Items2 = [];
        var items = this.state.items;
        var num=this.state.active?4:items.length;
        if(items.length>4){
            for(var i = 0; i <num; i++){
                Items1.push(
                    <Items
                        image={items[i].url}
                        phone={items[i].phone}
                        message={items[i].message}
                        time={items[i].time}
                    />
                );
            }
        }


        return(
            <View style={styles.record}>
                <Title initObj={{title:'投资者记录'}} />
                {Items1}
                <TouchableOpacity style={styles.infoConSelect} onPress={this.onkeyDown.bind(this)} >
                    {
                        this.state.active?<View style={[styles.infoConSelectIcon]}></View>:<View style={[styles.infoConSelectIcon,styles.infoConSelectIconActive]}></View>
                    }
                </TouchableOpacity>
            </View>
        )
    }

}


const styles=StyleSheet.create({
    record:{
        marginTop:8*Util.pixel,
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        paddingBottom:11*Util.pixel,
        borderTopWidth:1*Util.pixel,
        borderBottomWidth:1*Util.pixel,
        borderColor:'#e2e2e2',
    },
    infoConSelect:{
        height:15*Util.pixel,
        alignItems:'center',
        marginTop:6*Util.pixel,
        marginBottom:6*Util.pixel,
    },
    infoConSelectIcon:{
        borderLeftWidth:2*Util.pixel,
        borderBottomWidth:2* Util.pixel,
        width:15*Util.pixel,
        height:15*Util.pixel,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
        marginLeft:3*Util.pixel,
        marginTop:-3,
    },
    infoConSelectIconActive:{
        transform: [{rotate: '135deg'}],
        marginTop:5*Util.pixel,
    },

})