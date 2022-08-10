import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';

export default function App() {
  const [revenue,setRevenue] = useState(0);
  const [expenses,setExpenses] = useState(0);
  const [status,setStatus] = useState(false);

  function TaxCalculator  () {
    const profit = revenue - expenses;
    const cit = (20/100) * revenue;
    const vat = (7.5/100) * profit;
    const total = cit + vat;
    return(
      <View style={styles.summary}>
        <Text style={styles.summaryLine}>Your Revenue :{revenue}</Text>
        <Text style={styles.summaryLine}>Your Expense :{expenses}</Text>
        <Text style={styles.summaryLine}>Your Profit :{profit}</Text>
        <Text style={styles.summaryLine}>CIT Tax :{cit}</Text>
        <Text style={styles.summaryLine}>VAT Tax :{vat}</Text>
        <Text style={styles.summaryLine}>Total Tax to Pay :{total}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.logoWrapper}>
        <Image 
          source={require('./assets/images/download.jpg')}
          style={styles.logo}
          />
        <Text style={styles.heading}>Company Tax Calculator</Text>  
      </View>

      {status == true ? TaxCalculator(): null}
      <TextInput 
      style={styles.input} 
      placeholder='Total revenue'
      onChangeText={(revenueInput) => setRevenue(revenueInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='Total expense'
      onChangeText={(expenseInput) => setExpenses(expenseInput)}
      />

      <Button title='CALCULATE TAX' onPress={() => { 
        TaxCalculator;
        setStatus(true);
        }}/>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  input:{
    paddingHorizontal:20,
    paddingVertical:14,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50,
    marginVertical:5
  },
  logoWrapper:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  summary:{
    padding:10,
    backgroundColor:'skyblue',
    borderRadius:8,
  },
  summaryLine:{
    borderBottomWidth:1,
    borderBottomColor:'blue',
    fontSize:20,
    marginBottom:4,
  },
  heading:{
    fontSize:28
  },
  logo:{
    width:80,
    height:80,
    borderRadius:50,
  },
})