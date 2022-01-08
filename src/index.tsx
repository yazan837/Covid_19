import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {useNavigation} from '@react-navigation/native';
import actions from '../redux/actions/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/StackNavigator';

const {fetchCountries, fetchAll}: any = actions;

export default function Home() {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
  const navigation = useNavigation<homeScreenProp>();
  const TopCountries = useSelector(
    (state: RootStateOrAny) => state.home.TopFive,
  );
  const isFethingCountries = useSelector(
    (state: RootStateOrAny) => state.home.isFethingCountries,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchAll());
  }, []);
  if (isFethingCountries) {
    return (
      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.title}>Search</Text>
      </TouchableOpacity>
      <View style={{flex: 1, marginTop: 25}}>
        <View>
          <Text style={styles.seeMore}>Top 5 countries in Covid-19 cases</Text>
        </View>
        {TopCountries.map(
          (item: {ID: string; Country: string; TotalConfirmed: string}) => {
            return (
              <TouchableOpacity
                key={item.ID}
                style={styles.container}
                onPress={() =>
                  navigation.navigate('CountriesDetaiels', {item})
                }>
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
        <TouchableOpacity
          style={{marginTop: 25}}
          onPress={() => navigation.navigate('Chart')}>
          <Text style={styles.seeMore}>See Charts</Text>
        </TouchableOpacity>
      </View>
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
  search: {
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    width: '70%',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
});
