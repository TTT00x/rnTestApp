import React from 'react';
import { Animated, View, ScrollView, Text, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Weather from './Weather';

export default class MorningView extends React.Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
      <View>
        <Text style={{
          height: 50
        }}>Good Morning!</Text>
        <ScrollView
          style={{
            height: dimensions.height - 180
          }}
          bounces={false}>
          <Text>Date</Text>
          <Image
            source={require('../assets/main.png' )}
            style={{
              height: imageHeight,
              width: imageWidth
            }}
          />
          <LinearGradient
            colors={['#deeaf0', '#d2e6ef', '#8bcfef']}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Text>!!! Tips !!!</Text>
            <Weather animationDelay={100}/>
            <Weather animationDelay={200}/>
            <Weather animationDelay={300}/>
          </LinearGradient>
        </ScrollView>
      </View>
    )
  }
}
