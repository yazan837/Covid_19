import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {RootStackParamList} from './navigation/StackNavigator';
import actions from '../redux/actions/index';

const {fetchAll}: any = actions;
export default function Chart() {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
  const Totall = useSelector((state: RootStateOrAny) => state.home.Total);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View>
        <Text>General Covid-19 in last months</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * Totall.TotalConfirmed,
                  Math.random() * Totall.TotalConfirmed,
                  Math.random() * Totall.TotalConfirmed,
                  Math.random() * Totall.TotalConfirmed,
                  Math.random() * Totall.TotalConfirmed,
                  Math.random() * Totall.TotalConfirmed,
                ],
              },
            ],
          }}
          width={400} // from react-native
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
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
}
