import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStateOrAny, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import reactotron from 'reactotron-react-native';
import {RootStackParamList} from './navigation/StackNavigator';

export default function CountriesList() {
  const contries = useSelector((state: RootStateOrAny) => state.home.Countries);
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
  const navigation = useNavigation<homeScreenProp>();
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Covid-19 cases in all countries
        </Text>
      </View>
      {contries.map(
        (item: {ID: string; Country: string; TotalConfirmed: string}) => {
          return (
            <TouchableOpacity
              key={item.ID}
              style={styles.container}
              onPress={() => navigation.navigate('CountriesDetaiels', {item})}>
              <Text style={styles.title}>{item.Country}</Text>
              <Text style={styles.title}>
                Total Confirmed :{item.TotalConfirmed}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 0.5,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 20,
  },
  title: {color: 'black', fontSize: 14, fontWeight: 'bold'},
});
