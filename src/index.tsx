import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {useNavigation} from '@react-navigation/native';
import actions from '../redux/actions/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/StackNavigator';

const {fetchCountries}: any = actions;

export default function Home() {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
  const navigation = useNavigation<homeScreenProp>();
  const TopCountries = useSelector(
    (state: RootStateOrAny) => state.home.TopFive,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center'}}>
      <View>
        <Text style={styles.seeMore}>Top 5 countries in Covid-19 cases</Text>
      </View>
      {TopCountries.map(
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
      <TouchableOpacity onPress={() => navigation.navigate('CountriesList')}>
        <Text style={styles.seeMore}>See More</Text>
      </TouchableOpacity>
    </View>
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
  seeMore: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});