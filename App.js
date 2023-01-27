import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useState,Component } from 'react';

export default function App() {
  const [color, setColor] = useState('black');
  
  return (
    <View style={styles.container}>
      <Text style={{color:color}}>Hello</Text>
      <View style={styles.buttonStyle}>
      <Button title="Red" style={styles.buttonStyle} onPress={()=>{setColor('red')}}></Button>
      <Button title="Blue" style={styles.buttonStyle} onPress={()=>{setColor('blue')}}></Button>
      </View>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection:'row',
  },
});
