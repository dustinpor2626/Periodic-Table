import React , {Component} from 'React';
import {Image,Text,StyleSheet,View,TouchableOpacity,Modal,TextInput,ImageBackground,ScrollView,Dimensions} from 'react-native';


import ListDetail from './ListDetail.js';
import AwesomeButton from 'react-native-really-awesome-button';

export default class Home extends Component{


    state={
      element:'',
        show_modal:false,
        wide: Math.round(Dimensions.get('window').width)/18,
        per1:[{no:1,name:'H'},{no:2,name:'He'}],

        per2:[{no:3,name:'Li'},{no:4,name:'Be'},{no:5,name:'B'},{no:6,name:'C'},
              {no:7,name:'N'},{no:8,name:'O'},{no:9,name:'F'},{no:10,name:'Ne'}],

        per3:[{no:11,name:'Na'},{no:12,name:'Mg'},{no:13,name:'Al'},{no:14,name:'Si'},
              {no:15,name:'P'},{no:16,name:'S'},{no:17,name:'Cl'},{no:18,name:'Ar'}],

        per4:[{no:19,name:'K'},{no:20,name:'Ca'},{no:21,name:'Sc'},{no:22,name:'Ti'},
              {no:23,name:'V'},{no:24,name:'Cr'},{no:25,name:'Mn'},{no:26,name:'Fe'},
              {no:27,name:'Co'},{no:28,name:'Ni'},{no:29,name:'Cu'},{no:30,name:'Zn'},
              {no:31,name:'Ga'},{no:32,name:'Ge'},{no:33,name:'As'},{no:34,name:'Se'},{no:35,name:'Br'},{no:36,name:'Kr'}],

        per5:[{no:37,name:'Rb'},{no:38,name:'Sr'},{no:39,name:'Y'},{no:40,name:'Zr'},
              {no:41,name:'Nb'},{no:42,name:'Mo'},{no:43,name:'Tc'},{no:44,name:'Ru'},
              {no:45,name:'Rh'},{no:46,name:'Pd'},{no:47,name:'Ag'},{no:48,name:'Cd'},
              {no:49,name:'In'},{no:50,name:'Sn'},{no:51,name:'Sb'},{no:52,name:'Te'},{no:53,name:'I'},{no:54,name:'Xe'}],


        per6:[{no:55,name:'Cs'},{no:56,name:'Ba'},{no:57,name:'La'},{no:72,name:'Hf'},
              {no:73,name:'Ta'},{no:74,name:'W'},{no:75,name:'Re'},{no:76,name:'Os'},
              {no:77,name:'Ir'},{no:78,name:'Pt'},{no:79,name:'Au'},{no:80,name:'Hg'},
              {no:81,name:'TI'},{no:82,name:'Pb'},{no:83,name:'Bi'},{no:84,name:'Po'},{no:85,name:'At'},{no:86,name:'Rn'}],

        per7:[{no:87,name:'Fr'},{no:88,name:'Ra'},{no:89,name:'Ac'},{no:104,name:'Rf'},
              {no:105,name:'Db'},{no:106,name:'Sg'},{no:107,name:'Bh'},{no:108,name:'Hs'},
              {no:109,name:'Mt'},{no:110,name:'Ds'},{no:111,name:'Rg'},{no:112,name:'Cn'},
              {no:113,name:'Nh'},{no:114,name:'FI'},{no:115,name:'Mc'},{no:116,name:'Lv'},{no:117,name:'Ts'},{no:118,name:'Og'}],

        per8:[{no:58,name:'Ce'},{no:59,name:'Pr'},{no:60,name:'Nd'},{no:61,name:'Pm'},
              {no:62,name:'Sm'},{no:63,name:'Eu'},{no:64,name:'Gd'},{no:65,name:'Tb'},
              {no:66,name:'Dy'},{no:67,name:'Ho'},{no:68,name:'Er'},{no:69,name:'Tm'},
              {no:70,name:'Yb'},{no:71,name:'Lu'}],


        per9:[{no:90,name:'Th'},{no:91,name:'Pa'},{no:92,name:'U'},{no:93,name:'Np'},
              {no:94,name:'Pu'},{no:95,name:'Am'},{no:96,name:'Cm'},{no:97,name:'Bk'},
              {no:98,name:'Cf'},{no:99,name:'Es'},{no:100,name:'Fm'},{no:101,name:'Md'},
              {no:102,name:'No'},{no:103,name:'Lr'}],

        row : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],

	button_disable:false,

       }



send = (data) =>{

setTimeout(() => {

if(this.state.button_disable == false)
{ 
this.setState({element:data});
  this.setState({show_modal:true});
}

},200)


}


    render(){

        return(


  <View style={styles.container}>

  <ListDetail
     element_name = {this.state.element}
     visibility = {this.state.show_modal}
     closeModal = {() => this.setState({show_modal:false})}
     />

  <ImageBackground style={{height:'100%',width:'100%',resizeMode:'cover'}} source={require('../images/list3.jpeg')} blurRadius={1} >

        <View style={styles.header}>
        <ScrollView
          horizontal ={true}
          showsHorizontalScrollIndicator = {false} >
          <View style={styles.type_element}><Text style={{color:'rgba(255,0,255,0.9)'}}>Alkali metal</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(127,255,212,0.9)'}}>Alkaline earth metal</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(154,205,50,0.9)'}}>Reactive Non-metals</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(173,216,230,0.9)'}}>Nobel gas</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(245,245,220,0.9)'}}>Metalloid</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(205,133,63,0.9)'}}>Lanthanide</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(176,196,222,0.9)'}}>Actinide</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(189,183,107,0.9)'}}>Tansition metal</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(255,160,122,0.9)'}}>Post-transition metal</Text></View>
          <View style={styles.type_element}><Text style={{color:'rgba(0,128,128,0.9)'}}>Unknown Chemical Properties</Text></View>
          </ScrollView>
        </View>

        <View style={styles.table}>

        <ScrollView 
	style={{height:'100%',width:'100%'}}
        onMomentumScrollBegin = {() => this.setState({button_disable:true})}
	onMomentumScrollEnd = {() => this.setState({button_disable:false})}
	>

          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {

                var index = data;


                if(data == 17)
                  index = 1


                if(data == 0  || data == 17){
                  var color = 'rgba(154,205,50,0.9)';

                    if(data == 17)
                      color = 'rgba(173,216,230,0.9)';

                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per1[index].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per1[index].name}</Text>
                  </AwesomeButton>
                </View>);
              }else
                return(<View style={{width:this.state.wide,height:this.state.wide}}></View>);
              })
              }
          </View>

          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {
                  var index = data;
                      if(data > 11)
                          index = data - 10;


                if(data < 2  || data > 11){

                    if(data == 0)
                        var color = 'rgba(255,0,255,0.9)';
                        else if (data == 1)
                            color = 'rgba(127,255,212,0.9)';
                            else if(data == 12)
                              color = 'rgba(245,245,220,0.9)';
                              else if(data > 12 && data < 17)
                                color = 'rgba(154,205,50,0.9)';
                                else if(data == 17)
                                  color = 'rgba(173,216,230,0.9)';

                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per2[index].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per2[index].name}</Text>
                  </AwesomeButton>
                </View>);
              }  else
                return(<View style={{width:this.state.wide,height:this.state.wide}}></View>);
              })
              }
          </View>


          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {
                  var index = data;

                    if(data > 11)
                      index = data - 10;

                if(data < 2  || data > 11){

                  if(data == 0)
                      var color = 'rgba(255,0,255,0.9)';
                      else if (data == 1)
                          color = 'rgba(127,255,212,0.9)';
                          else if(data == 12)
                            color = 'rgba(255,160,122,0.9)';
                            else if(data == 13)
                              color = 'rgba(245,245,220,0.9)'
                            else if(data > 13 && data < 17)
                              color = 'rgba(154,205,50,0.9)';
                              else if(data == 17)
                                color = 'rgba(173,216,230,0.9)';

                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per3[index].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per3[index].name}</Text>
                  </AwesomeButton>
                </View>);
              }else
                return(<View style={{width:this.state.wide,height:this.state.wide}}></View>);
              })
              }
          </View>


          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {

                if(data == 0)
                    var color = 'rgba(255,0,255,0.9)';
                    else if (data == 1)
                        color = 'rgba(127,255,212,0.9)';
                        else if (data > 1 && data < 11)
                          color = 'rgba(189,183,107,0.9)';
                        else if(data == 11 || data == 12)
                          color = 'rgba(255,160,122,0.9)';
                          else if(data == 13 || data == 14)
                            color = 'rgba(245,245,220,0.9)';
                          else if(data == 15 || data == 16)
                          color = 'rgba(154,205,50,0.9)';
                            else if(data == 17)
                              color = 'rgba(173,216,230,0.9)';


                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per4[data].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per4[data].name}</Text>
                 </AwesomeButton>
                </View>);
              })
              }
          </View>

          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {

                if(data == 0)
                    var color = 'rgba(255,0,255,0.9)';
                    else if (data == 1)
                        color = 'rgba(127,255,212,0.9)';
                        else if (data > 1 && data < 11)
                          color = 'rgba(189,183,107,0.9)';
                        else if(data == 11 || data == 12 || data == 13)
                          color = 'rgba(255,160,122,0.9)';
                          else if(data == 14 || data == 15)
                            color = 'rgba(245,245,220,0.9)';
                          else if(data == 16)
                          color = 'rgba(154,205,50,0.9)';
                            else if(data == 17)
                              color = 'rgba(173,216,230,0.9)';


                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per5[data].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per5[data].name}</Text>
                  </AwesomeButton>
                </View>);
              })
              }
          </View>

          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {

                if(data == 0)
                    var color = 'rgba(255,0,255,0.9)';
                    else if (data == 1)
                        color = 'rgba(127,255,212,0.9)';
                        else if(data == 2)
                          color = 'rgba(205,133,63,0.9)';
                        else if (data > 2 && data < 11)
                          color = 'rgba(189,183,107,0.9)';
                        else if(data > 10 && data < 16)
                          color = 'rgba(255,160,122,0.9)';
                          else if(data == 16)
                            color = 'rgba(245,245,220,0.9)';
                            else if(data == 17)
                              color = 'rgba(173,216,230,0.9)';

                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                <AwesomeButton
                  height={this.state.wide}
                  width={this.state.wide}
                  style={styles.button}
		  disabled = {this.state.button_disable}
                  onPress = {() => this.send(this.state.per6[data].name)}
                  backgroundColor = {color}>
                <Text>{this.state.per6[data].name}</Text>
                </AwesomeButton>
                </View>);
              })
              }
          </View>


          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {

                if(data == 0)
                    var color = 'rgba(255,0,255,0.9)';
                    else if (data == 1)
                        color = 'rgba(127,255,212,0.9)';
                        else if (data == 2)
                          color = 'rgba(176,196,222,0.9)';
                        else if (data > 2 && data < 8)
                          color = 'rgba(189,183,107,0.9)';
                        else if(data == 8 || data == 9 || data == 10)
                          color = 'rgba(0,128,128,0.9)';
                          else if(data == 11)
                            color = 'rgba(255,160,122,0.9)';
                          else if(data > 11)
                          color = 'rgba(0,128,128,0.9)';


                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per7[data].name)}
                    backgroundColor = {color}>
                  <Text>{this.state.per7[data].name}</Text>
                </AwesomeButton>
                </View>);
              })
              }
          </View>


          <View style={{flexDirection:'row',marginTop:20}}>
              {this.state.row.map((data) => {
                  var index = data - 4;

                  if(data > 3)
                return(<View style={{width:this.state.wide,height:this.state.wide}}>
                  <AwesomeButton
                    height={this.state.wide}
                    width={this.state.wide}
                    style={styles.button}
		    disabled = {this.state.button_disable}
                    onPress = {() => this.send(this.state.per8[index].name)}
                    backgroundColor = {'rgba(205,133,63,0.9)'}>
                  <Text>{this.state.per8[index].name}</Text>
                </AwesomeButton>
                </View>);
                else
                return(<View style={{width:this.state.wide,height:this.state.wide}}></View>);

              })
              }
          </View>

          <View style={{flexDirection:'row'}}>
              {this.state.row.map((data) => {
                  var index = data - 4;
                      if(data > 3)
                        return(<View style={{width:this.state.wide,height:this.state.wide}}>
                          <AwesomeButton
                            height={this.state.wide}
                            width={this.state.wide}
                            style={styles.button}
		   	    disabled = {this.state.button_disable}
                            onPress = {() => this.send(this.state.per9[index].name)}
                            backgroundColor = {'rgba(176,196,222,0.9)'}>
                          <Text>{this.state.per9[index].name}</Text>
                        </AwesomeButton>
                        </View>);
                        else
                        return(<View style={{width:this.state.wide,height:this.state.wide}}></View>);

              })
              }
          </View>

          <View style={{height:20,width:'100%'}}></View>

        </ScrollView>

        </View>
        </ImageBackground>

</View>
        );
    }
}

const styles=StyleSheet.create({

header:{
  height:50,
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  borderBottomWidth:1,
  borderBottomColor:'white',
  marginBottom:10,
  backgroundColor:'rgba(0,0,0,0.3)',
},

table:{
  width:'100%',
  height:'90%',
  paddingBottom:25,
},

button:{
  borderColor:'black',
  borderWidth:0.5,
},

type_element:{
  paddingRight:20,
  paddingLeft:20,
  paddingTop:20,
  paddingBottom:20,
}
})
