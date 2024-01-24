import {View,Text,StyleSheet,Button} from 'react-native'
import Input from '../UI/Input'
import { useState } from 'react';
import { useCreateCarMutation } from '../api/carApi';
import { useNavigation } from '@react-navigation/native';

function ManageCar(){

    const [inputValues,setInputValues] = useState({
        brand: "",
        model: "",
        imageUrl: "",
        kilometer:""
    }) 
    const Navigation = useNavigation();

    const [useCreateCar] = useCreateCarMutation()


    function inputChangedHandler(inputIdentifier,enteredValue){
        setInputValues((curInputValues)=>{
            return {
                ...curInputValues,
                //Burada değişen ifade description ise aşağıdaki satırda description:enteredValue şeklinde yorumlanmaktadır.
                [inputIdentifier]:enteredValue
            }
        });
    }

    const submitHandler = () =>{
        
        const carModel = {
            brand:inputValues.brand,
            model:inputValues.model,
            kilometer:inputValues.kilometer,
            imageUrl:inputValues.imageUrl
        }
        if (carModel !== undefined) {
                useCreateCar(carModel)
        }

        Navigation.navigate('AllCar',{})
    }





    return (
        <View>
            <Text> Add Car </Text>
            <Input label="Brand" textInputConfig={{
                onChangeText: inputChangedHandler.bind(this,'brand'),
                }} >
            </Input>
            <Input label="Model" textInputConfig={{
                onChangeText: inputChangedHandler.bind(this,'model'),
                }} >
            </Input>
            <Input label="Image" textInputConfig={{
                onChangeText: inputChangedHandler.bind(this,'imageUrl'),
                }} >
            </Input>
            <Input label="Kilometer" textInputConfig={{
                onChangeText: inputChangedHandler.bind(this,'kilometer'),
                }} >
            </Input>
            <Button onPress={submitHandler} style={styles.buttonContainer} title='Create Car' ></Button>
        </View>

    )

}

export default ManageCar

const styles = StyleSheet.create({
    buttonContainer : {
        marginHorizontal:4,
        marginVertical:16,
        borderRadius:6,
        padding:8
    }
})