import React from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import JobInfo from './JobInfo'


export default class JobList extends React.Component {
  
    render() {
      const { navigation } = this.props;
      const jobs = navigation.getParam('jobs');
      const jobsize = jobs.length
      return (
        <View style={styles.container}>
        {jobs.map((job) => 
          <Button
          style={styles.button}
          title={job.title}
          onPress={()=>{
            this.props.navigation.navigate('JobInfo', {job: job});
          }}
          >
          </Button>
        )}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', //alargado
    },
    button: {
      backgroundColor: "rgba(92, 99,216, 1)",
      width: 300,
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5
    },
    inputText: {
      height: 50,
      paddingLeft: 3,
    }
  });
  
