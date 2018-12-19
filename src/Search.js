import React from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import axios from 'axios';

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        text: 'Search',
        postsToShow: []
      };
    }
    render() {
      const { navigation } = this.props;

      return (
          <View style={styles.container}>
        <Text title="Job Search"/>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
          <Button 
          onPress={()=> {
            axios.get(`https://jobs.github.com/positions.json`).then(res => {
                  let a = 0;
                  let job = [];
                  for(a = 0; a < res.data.length; a++){
                    //un if para verificar lo que tiene text
                    if(this.state.text != "Search"){
                      var busqueda = this.state.text;
                      if(res.data[a].title.includes(busqueda)){
                        job.push(res.data[a]);
                      }
                    }
                    
                  }
                  
                  this.setState(() => ({
                      postsToShow: job
                  })); 
                  this.props.navigation.navigate('JobList', {jobs: this.state.postsToShow});
              }).catch(err => console.log(err.message)); //eslint-disable-lint
              console.log(this.state.postsToShow.length)

              
          }}
          title="Buscar"
          style={styles.button}
          >
          </Button>
        </View>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', //alargado
      justifyContent: 'center',
    },
    button: {
      position: 'absolute',
      bottom: 35
    },
    inputText: {
      height: 50,
      paddingLeft: 3,
    }
  });
  