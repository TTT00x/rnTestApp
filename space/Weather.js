import React from 'react';
import { View, ScrollView, Text, Image, Dimensions} from 'react-native';

export default class Weather extends React.Component {

  render() {
    return (
      <View style={{
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 30
      }}>
        <View style={{
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}>
          <Text style={{
            color: 'gray'
          }}>Weather</Text>
        </View>
        <View style={{
          height: 300,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}>
          <Text>City</Text>
          <Text>Img</Text>
          <Text>gra</Text>
        </View>
      </View>
    )
  }
}
