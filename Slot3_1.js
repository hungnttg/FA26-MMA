import React from "react";
import { Text,View,StyleSheet,TouchableOpacity } from "react-native";
export default class Slot3_1 extends React.Component{
    ///-------------------code-----------------------
    constructor(){
        super();
        this.operations = ['DEL','+','-','*','/'];
        this.state={
            resultText:"",//bien luu ket qua
            calculationText:"",//bien luu bieu thuc tinh toan
        };
    }
    //cac ham
    //2.1 khi click vao button
    pressButton(text){
        if(text==="="){
            return this.calculationResult(this.state.resultText);
        }
        else if(text==="DEL"){
            this.operate('DEL');//goi ham operate deu xu ly DEL
        }
        else {
            this.setState({
                resultText: this.state.resultText+text,//noi chuoi
            });
        }
    }
    //dinh nghia ham calculationResult
    calculationResult(text){
        this.setState({
            calculationText: eval(text), //tinh toan gia tri bieu thuc
        });
    }
    //dinh nghia ham operate
    operate(op){
        switch(op){
            case 'DEL':
                let text = this.state.resultText.split('');//pha vo chuoi
                text.pop();//bo ky tu cuoi cung
                this.setState({
                    resultText: text.join(''),//noi lai thanh chuoi duy nhat
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    resultText: this.state.resultText+op, //noi phep tinh vao chuoi
                });
                break;
        }
    }
    //--------------------layout--------------------------
    render(){
        return(
            <View style={styles.container}>
                {/* view 1 */}
                <View style={styles.result}>
                    <Text style={styles.title}>{this.state.resultText}</Text>
                </View>
                {/* view 2 */}
                <View style={styles.calculation}>
                    <Text style={styles.title}>{this.state.calculationText}</Text>
                </View>
                {/* view 3: cac button */}
                <View style={styles.buttons}>
                    {/* view 3.1 */}
                    <View style={styles.number1}>
                        <TouchableOpacity style={styles.btn} key={1} onPress={()=>this.pressButton(1)}><Text style={styles.title}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={4} onPress={()=>this.pressButton(4)}><Text style={styles.title}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={7} onPress={()=>this.pressButton(7)}><Text style={styles.title}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'.'} onPress={()=>this.pressButton('.')}><Text style={styles.title}>.</Text></TouchableOpacity>
                    </View>
                    {/* view 3.2 */}
                    <View style={styles.number2}>
                         <TouchableOpacity style={styles.btn} key={2} onPress={()=>this.pressButton(2)}><Text>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={5} onPress={()=>this.pressButton(5)}><Text>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={8} onPress={()=>this.pressButton(8)}><Text>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={0} onPress={()=>this.pressButton(0)}><Text>0</Text></TouchableOpacity>
                    </View>
                    {/* view 3.3 */}
                    <View style={styles.number3}>
                         <TouchableOpacity style={styles.btn} key={3} onPress={()=>this.pressButton(3)}><Text>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={6} onPress={()=>this.pressButton(6)}><Text>6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={9} onPress={()=>this.pressButton(9)}><Text>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'='} onPress={()=>this.pressButton('=')}><Text>=</Text></TouchableOpacity>
                    </View>
                    {/* view 3.4 */}
                    <View style={styles.operations}>
                        <TouchableOpacity style={styles.btn} key={'+'} onPress={()=>this.pressButton('+')}><Text>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'-'} onPress={()=>this.pressButton('-')}><Text>-</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'*'} onPress={()=>this.pressButton('*')}><Text>*</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'/'} onPress={()=>this.pressButton('/')}><Text>/</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'DEL'} onPress={()=>this.pressButton('DEL')}><Text>DEL</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
    },
    result:{
        flex:2,
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:'green'
    },
    calculation:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:'orange',
    },
    buttons:{
        flex:7,
        flexDirection:'row',
        backgroundColor:'#AAAA',
    },
    numbers:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'yellow',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    number1:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#AAA222',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
     number2:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#58ba9e',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
     number3:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#e8e5bc',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    operations:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ABC',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    btn: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:"white",
        textAlign:'center',
        fontSize:30,
    },
});
    
 