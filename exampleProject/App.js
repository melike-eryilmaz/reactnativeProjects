
import React from 'react';
import {
  View
} from 'react-native';
import Header from './src/components/Header';
import List from './src/components/List';


const App: () => React$Node = () => {
  console.log("FFFHN")
  return (
    //Scrollview olmasına rağmen aşağıdaki alanı göstermiyordu yarıda kesiliyordu.
    //Bunun nedeni buradaki ana componentin tüm compıonentleri kapsamamasıydı.
    //Bu yüzden flex:1 diyerek tüm componentleri kapsamasını sağladık.
      <View style={{flex:1}}>
        <Header headerText="Anasayfa" />
        <List></List>
       </View>
      
  );
};


export default App;
