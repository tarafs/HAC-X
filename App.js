import 'react-native-gesture-handler';
import * as React   from 'react';
import firebase from 'firebase';

 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import RadioButtonRN from 'radio-buttons-react-native';
import { RadioButton } from 'react-native-paper';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ImageBackground,
   Dimensions ,
   TextInput,
   Image

} from 'react-native';
import DatePicker from 'react-native-datepicker'

 

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useEffect } from 'react';
 
// const image = { uri:"logo-og.png" };


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container} style={styles.text}>
     <View  >
      <Button style={styles.text} 

      title="تعديل الحساب"
      
      onPress={() =>
        navigation.navigate('تعديل حساب', { name: 'ريما' })
      }
      
     >

 
     </Button>
      </View>
   </View>
 
  );
};
const ProfileScreen = ({ navigation, route }) => {

  //////////////////////////////////////////
// هنا توضع بيانات فايربيز الخاصة بك 
 
  var firebaseConfig = {
    apiKey: "AIzaSyAkXsaGJeneO4043J0ILPEDT2BWCiOmP5A",
    authDomain: "kaleem-3d9ef.firebaseapp.com",
    databaseURL: "https://kaleem-3d9ef-default-rtdb.firebaseio.com",
    projectId: "kaleem-3d9ef",
    storageBucket: "kaleem-3d9ef.appspot.com",
    messagingSenderId: "73615207115",
    appId: "1:73615207115:web:95100116b32eb25e14894e",
    measurementId: "G-VQQNWL171Y"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 var db = firebase.database().ref('users/1');


  const [text, setText] = React.useState();
  const [date, setDate] = React.useState();  
  const [checked, setChecked] = React.useState();

 
  console.log(db);
  return (
  <ImageBackground source= {require('./background.png')}  style={styles.image} >
   <Text style={styles.text}>{route.params.name}</Text>
   <Text style={styles.text2}>البريد الالكتروني</Text>
     <TextInput
        style={{   height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setText(text)}
        defaultValue={text}
      />
   <Text style={styles.text3}> تاريخ الميلاد</Text>
   {/* Start date */}
   <DatePicker
        style={{width: 400}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2005-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date =>  setDate(date)}
      />
      {/* end date */}

 

<View style={[{flexDirection:'row', alignItems:'center'}]}>
     <Text style={styles.text4}>طفلة</Text>
     <Image
          style={[{width:50,height:50}]}
          source={require('./girl.png')}
        />
      <RadioButton
        value="girl"
        status={ checked === 'girl' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('girl')}
      />

     <Text style={styles.text4}>طفل</Text>
     <Image
          style={[{width:50,height:50}]}
          source={require('./boy.png')}
        />
      <RadioButton
        value="boy"
        status={ checked === 'boy' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('boy')}
      />
    </View>


{/* Send Data */}
<Button style={styles.text} 

title="حفظ التغيرات"

onPress={() =>
  firebase.database().ref('users/1').update({
    name:'ريما',
    email:text,
    date:date,
    checked:checked
  })
}

>
</Button>

 </ImageBackground>

  )
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex:1,
    
 
  },
  image2: {
   height:100,
   width:100,
   marginLeft:180
 
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  
    },
  text2: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:100
  
    },
  text3: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  
    },
  text4: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft:60
    ,marginTop:40
  
    },
    margin:{
      marginTop:100
    },
  buttonStyle:{
    marginTop:500,
    width:200
  }
});
const App  = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="الرئيسية"
        component={HomeScreen}
      
      />
      <Stack.Screen name="تعديل حساب" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default App;
