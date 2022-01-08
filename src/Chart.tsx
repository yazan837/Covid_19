import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {RootStackParamList} from './navigation/StackNavigator';

export default function Chart() {
  const Totall = useSelector((state: RootStateOrAny) => state.home.Total);
  const numbers = Totall.map((el: {TotalConfirmed: any}) => el.TotalConfirmed);

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>General Covid-19 in last months</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  numbers[0],
                  numbers[1],
                  numbers[2],
                  numbers[3],
                  numbers[4],
                  numbers[5],
                ],
              },
            ],
          }}
          width={375} // from react-native
          height={400}
          yAxisLabel=""
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
}
