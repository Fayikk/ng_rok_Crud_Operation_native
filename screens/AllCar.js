import React, { useEffect,useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList,ActivityIndicator,Button} from 'react-native';
import { useGetAllCarQuery } from '../api/carApi';
import CartItem from '../screens/CartItem'
import Indicator from '../UI/Indicator';

function CarItem(item) {

  return (
      <CartItem {...item.item} ></CartItem>
  );
}

function AllCar() {
  console.log("trigger All Car")
    const { data, isLoading } = useGetAllCarQuery(null);

  if (isLoading) {
    return ( 
        <Indicator size="large" color="#660099" ></Indicator>
    ); 
  }

  return (
    <>
    <FlatList
      data={data} 
      keyExtractor={(item) => item.carId.toString()} 
      renderItem={({ item }) => <CarItem item={item} />} 
    />
    </>
  );
}

const styles = StyleSheet.create({
  
 
});

export default AllCar;
 