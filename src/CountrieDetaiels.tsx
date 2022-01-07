import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Moment from 'moment';
export default function CountriesDetaiels({route}: any) {
  const item = route.params;

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1, padding: 10}}>
      <View>
        <Text style={styles.title}>
          Covid-19 detailes in {item.item.Country}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Total Confirmed</Text>
        <Text style={styles.title}> {item.item.TotalConfirmed}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Total Deaths</Text>
        <Text style={styles.title}> {item.item.TotalDeaths}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>New Deaths</Text>
        <Text style={styles.title}> {item.item.NewDeaths}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Total Recovered</Text>
        <Text style={styles.title}> {item.item.TotalRecovered}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>New Recovered</Text>
        <Text style={styles.title}> {item.item.NewRecovered}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.title}>
          {Moment(item.item.Date).format('MMMM do, yyyy H:mma')}
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
