import React from 'react';
import { View, ScrollView, Text, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class MorningView extends React.Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
      <View>
        <Text>Good Morning!</Text>
        <ScrollView>
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
            style={{ height: 300 }}
          >
          </LinearGradient>
        </ScrollView>
      </View>
    )
  }
}
