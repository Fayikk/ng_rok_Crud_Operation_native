import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, Image,Button } from 'react-native';
import { useGetCarByIdQuery,useRemoveCarMutation } from '../api/carApi';
import Indicator from '../UI/Indicator';
import { useNavigation } from '@react-navigation/native';

function CarDetail({ route, navigation }) {
  const selectedCarId = route.params?.id;

  const { data, isLoading } = useGetCarByIdQuery(selectedCarId);
  const [useRemoveCar] = useRemoveCarMutation();
    const navigator = useNavigation();
  if (isLoading) {
    return (
      <View style={styles.container}>
      <Indicator size="large" color="#660099" ></Indicator>
      </View>
    );
  }


  const RemoveCar = (carId) =>{
    useRemoveCar(carId);
    navigation.goBack();
} 



    function CarDetailUpdate(carId){
        console.log("inner function")
        console.log(carId)
       navigator.navigate('UpdateScreen',{
        id:carId
       })
    }



  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} resizeMode='cover' />
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.model}>Model: {data.model}</Text>
        <Text style={styles.kilometer}>Kilometer: {data.kilometer}</Text>
        {/* Add more details as needed */}
      </View>
      <View style={styles.buttonContainer} >
      <Button title='Delete' onPress={()=>RemoveCar(data.carId)} ></Button>
    <Button title='Update' onPress={()=>CarDetailUpdate(data.carId)} ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  model: {
    fontSize: 18,
    marginBottom: 5,
  },
  kilometer: {
    fontSize: 16,
  },
  buttonContainer:{
    color:'red',
    marginTop:5,
    flexDirection:'row'

  }
});

export default CarDetail;
