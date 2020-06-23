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
  }
  clearScreen = () => {
    this.setState({
      word: '',
      count: 0, 
      vowels: 0,
      consonants: 0
    })
  }

  render(){
      return(
        <View style={styles.container}>
          <Text style={styles.title}>A Word Analyzer</Text>

          <View style={styles.container}>
            <Text>Word</Text>
            <TextInput 
              onChangeText={(word) => this.setState({word})}
              style={styles.instructions} 
              placeholder='Word to analyze'/>   
          </View>
          
          <View style={styles.container}>
            <Button title = 'analyze' onPress= {this.wordAnalyzer}/>
            <Button title='Clear' onPress={this.clearScreen} color="#841584"/>
          </View>

          <View style={styles.container2}>
            <Text><b>Word{"                        "}: </b>{this.state.word}</Text>
            <Text><b>No. of Consonants{"  "}: </b>{this.state.consonant}</Text>
            <Text><b>No. of Vowels{"          "}: </b>{this.state.vowel}</Text>
            <Text><b>No. of Characters{"    "}: </b>
                  {this.state.vowel + this.state.consonant}
            </Text>
          </View>
        </View>
      );
    }
}
