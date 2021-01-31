import React,{Component} from 'react';
import {View,Text, ScrollView} from 'react-native';2
import axios from 'axios';
import Detail from './Detail';
//style={{marginTop:5}} şeklinde de style verebiliriz.
/*const List = ()=>{
    return (
        <View style={{marginTop:5}}>
           <Text> List Page</Text>
        </View>
    )
};
*/
/**
 * Burada fonksiyon bazlı component ile çalışmamalıyız.
 * Bu component de servisten verilere erişebilmek için class bazlı component olmalıdır.
 * List classını Component den türetiriz.
 */
/**
 * ctrl +m debug tool
 * Adım adım debug :
 * debugger;
 * const a=5; gibi step step ç
 * alışabiliriz
 */
/**
 * Network Request : axios
 * npm install --save axios
 * servisimize get ve post request lerimizi atabilmek için gerekli framework 
 * 
 */
class List extends Component{
    //state içerisinde data array oluşturuyoruz.
    state = { data :[]};
    //Uygulama ilk açıldığında çalışann lifecycle dır.
    UNSAFE_componentWillMount(){
            console.log('componentwillmount');
            axios.get('https://jsonplaceholder.typicode.com/photos')
            //.then(resp=>console.log(resp.data.splice(0,5)));//servisten gelen datanın ilk 5 ini alıyoruz.
            .then(resp=>this.setState({data : resp.data.splice(0,5)}));//state içerisindeki data arraye servisten gelen datayı koyuyoruz.
    }
    //Sayfa render edildikten sonra çalışan lifecycle dır.
    componentDidMount(){
        console.log('componentDidMount');

    }
    //data array i mapleyerek içerisindeki title ı alıyoruz.
    renderData(){
        return this.state.data.map(
           (responseData,Id)=>
            // <Text key={Id}>{responseData.title}</Text>
            <Detail key={Id} data={responseData}/>

        )
    }
    //componentwillmount dan sonra sayfa render edilir.
    render(){
        console.log('data array'+this.state+this.data);
        console.log('render');
        return (
            // <View style={{marginTop:5}}>
            //     {/* <Text> List Page</Text> */}
            //     {this.renderData()}
            // </View>
            //Aşağı doğru inebilmek için scrollview yaptık.
            <ScrollView style={{marginTop:5}}>
            {/* <Text> List Page</Text> */}
            {this.renderData()}
        </ScrollView>
        );
    }
}
export default List;