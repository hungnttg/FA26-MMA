import React,{useState} from "react";
import { Text,View,StyleSheet,TouchableOpacity } from "react-native";
export default function Slot4_1(){
    //code===========================
    const [calculation,setCalculation]=useState('');
    const [result,setResult]=useState('');
    //--ham press con so
    const pressButton = (text) =>{
        if(text==="="){
            try {
                setResult(eval(calculation).toString());//tinh toan gia tri bieu thuc
                setCalculation('');//reset calculation
            } catch (error) {
                setResult('Loi')
            }
        } else {
            setCalculation(prev=>prev+text);//noi chuoi
        }
    };
    //--ham nhan phep tinh
    const operate = (op) =>{
        if(op === 'DEL'){
            setCalculation(prev=>prev.slice(0,-1));//cat ky tu cuoi cung
        } else {
            setCalculation(prev=>prev+op);
        }
    };
    //--ham render
    const renderNumberButtons = () =>{
        const nums = [[1,2,3],[4,5,6],[7,8,9],['.','0','=']];
        return nums.map((row,i)=>(
            <View key={i} style={styles.row}>
                {row.map((num)=>(
                    <TouchableOpacity key={num} style={styles.btn} onPress={()=>pressButton(num.toString())}>
                        <Text style={styles.txt}>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        ));

    };
    const renderOperatorButtons = () =>{
        const ops = ['+','-','*','/','DEL'];
        return ops.map((op)=>(
            <TouchableOpacity key={op} style={styles.btn} onPress={()=>operate(op)}>
                <Text style={styles.txt}>{op}</Text>
            </TouchableOpacity>
        ));
    };
    //layout=========================
    return(
        <View style={styles.container}>
            <View style={styles.resultText}>
                <Text style={styles.txt}>{result}</Text>
            </View>
            <View style={styles.calculationText}>
                <Text style={styles.txt}>{calculation}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numberButtons}>
                    {renderNumberButtons()}
                </View>
                <View style={styles.operationButtons}>
                    {renderOperatorButtons()}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container :{flex:1, backgroundColor:'yellow'},
    resultText:{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'},
    calculationText:{flex:2,backgroundColor:'#AAA111',justifyContent:'center',alignItems:'center'},
    buttons:{flex:7,flexDirection:'row',backgroundColor:'pink'},
    numberButtons:{flex:3,backgroundColor:'#BBB',justifyContent:'space-around'},
    operationButtons:{flex:1,backgroundColor:'#CCC111',justifyContent:'space-around'},
    row:{flexDirection:'row',justifyContent:'space-around'},
    btn:{flex:1,backgroundColor:'#DDD111',justifyContent:'center',alignItems:'center'},
    txt:{fontSize:30,fontWeight:'bold'},
});