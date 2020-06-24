import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet } from 'react-native';
import {styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: '',
      consonant: 0,
      vowel: 0,
    }
  }
  wordAnalyzer = () => {
      let wordss = this.state.word.toLowerCase();
      let str = wordss.split('');
      
      this.setState({word: str, consonant:0, vowel:0},() => {
        for(let char of str){
          if(char == 'a'|| char == 'e'||char == 'i'||char == 'o'||char == 'u'){
            this.setState((prevState) => ({
              vowel: prevState.vowel + 1
            }));
          }
          else if(char >= 'a' || char <= 'z'){
            this.setState((prevState) => ({
              consonant: prevState.consonant + 1
            }));
          }
        }
      });
      this.textInput.clear();
  }
  render(){
      return(
        <View style={styles.container}>
          <Text style={styles.title}>A Word Analyzer</Text>

          <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Word</Text>
            <TextInput onChangeText={(word) => this.setState({word})} style={styles.instructions} placeholder='Word to analyze' ref={input=>{this.textInput=input}}/> 
            <Text>{'\n\n'}</Text>
            <Button title ='Analyze' onPress= {this.wordAnalyzer}/>
          </View>

          <View style={styles.container2}>
            <Text>Word: {this.state.word}</Text>
            <Text>No. of Consonants: {this.state.consonant}</Text>
            <Text>No. of Vowels: {this.state.vowel}</Text>
            <Text>No. of Characters: {this.state.vowel + this.state.consonant}</Text>
          </View>
        </View>
      );
    }
}
