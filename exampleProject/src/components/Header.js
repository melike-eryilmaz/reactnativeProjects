import React from 'react';
import {Text,View} from 'react-native';

//Burada props diyerek componentimizin property ler aldığını belirtiyoruz.
//Sadece bir parametre property olsaydı direkt {} içerisinde onu verebilirdik.
//const Header = ({headerText})=>{ şeklinde aşağıdada direkt {headerText} olarak ekrana basardık.
const Header = (props)=>{
    const {textStyle,viewStyle}=styles;
    return (
        //style ı direkt dosya veriyormuş gibi tanımlayabiliriz.
        // <Text style={styles.textStyle}>Anasayfa</Text>

        //Ya da burada yaptıgımız gibi bir property tanımlayıp aşağıda kolaylıkla kullanabiliriz.
        <View style={viewStyle}>
        
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
        //props.headerText diyerek property lerden headerText i alıp ekrana basıyoruz.
    );
};
const styles = {
    viewStyle :{
        backgroundColor : '#90A4AE',
        marginTop : 20,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        shadowOffset: { height: 10, width: 0 },
        shadowOpacity:2
    },
    textStyle :{
      fontSize:20  
    }
  };
export default Header;