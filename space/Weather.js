import React from 'react';
import { Animated, View, Text } from 'react-native';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      position: new Animated.ValueXY(0, -50),
      twirl: new Animated.Value(0)
    }
  }
  componentDidMount() {
    const gestureState = {
      vx: 10000,
      vy: 10000
    }
    Animated.parallel([
      Animated.timing(this.state.position, {
        toValue: {x: 0, y: 20},
        duration: 300,
        delay: 200
      }),
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 300,
        delay: 200
      }),
    ]).start();
  }
  render() {
    return (
      <View style={{
        height: 100,
        width: '100%',
        marginBottom: 30,
      }}>
        <Animated.View style={{
          backgroundColor: 'white',
          width: '90%',
          opacity: this.state.fadeAnim,
          position: 'absolute',
          top: this.state.position.y,
          left: '5%'
        }}>
          <View style={{
            display: 'flex',
            justifyContent: 'center',
            height: 50,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
            <Text style={{
              color: 'gray'
            }}>Weather</Text>
          </View>
          <View style={{
            height: 50,
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
        </Animated.View>
      </View>
    )
  }
}
