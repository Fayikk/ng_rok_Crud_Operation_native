import {View,Text,Button} from 'react-native'
import { useGetCarByIdQuery } from '../api/carApi';
import { useState } from 'react';
import Input from '../UI/Input';
import { useUpdateCarMutation } from '../api/carApi';
import Indicator from '../UI/Indicator';

function UpdateScreen({route,navigation}){

    const selectedWillUpdateCar = route.params?.id;
    const {data,isLoading} = useGetCarByIdQuery(selectedWillUpdateCar)
    const [useUpdateCar] = useUpdateCarMutation();


    const [selectedCar,setSelectedCarState] = useState({
        brand:data.brand,
        model:data.model,
        kilometer:data.kilometer.toString(),
        imageUrl:data.imageUrl
    })



    function inputChangedHandler(inputIdentifier,enteredValue){
        setSelectedCarState((curInputValues)=>{
            return {
                ...curInputValues,
                //Burada değişen ifade description ise aşağıdaki satırda description:enteredValue şeklinde yorumlanmaktadır.
                [inputIdentifier]:enteredValue
            }
        });
    }

    // public string Brand { get; set; }
    // public string Model { get; set; }
    // public int Kilometer { get; set; }
    // public string? ImageUrl { get; set; }

    function submitHandler(){
        const updateCarModel = {
            brand:selectedCar.brand.toString(),
            model:selectedCar.model.toString(),
            kilometer:parseInt(selectedCar.kilometer),
            imageUrl:selectedCar.imageUrl.toString()
        };

        if (updateCarModel!==undefined) {
            useUpdateCar({selectedWillUpdateCar,updateCarModel}),
            navigation.goBack();
        }


    }

    if (isLoading && data === undefined) {
        <Indicator size="large" color="#660099" ></Indicator>
    }


    return (
     
        <View>
            <Text>Create Car</Text>
            <View>
                <Input label="Brand" textInputConfig={{
                    value:selectedCar.brand,
                    onChangeText: inputChangedHandler.bind(this,'brand'),
                    }} >
                </Input>
                <Input label="Model" textInputConfig={{
                    value:selectedCar.model,
                    onChangeText: inputChangedHandler.bind(this,'model'),
                    }} >
                </Input>
                <Input label="Image" textInputConfig={{
                    value:selectedCar.imageUrl,
                    onChangeText: inputChangedHandler.bind(this,'imageUrl'),
                    }} >
                </Input>
                <Input label="Kilometer" textInputConfig={{
                    value:selectedCar.kilometer,
                    onChangeText: inputChangedHandler.bind(this,'kilometer'),
                    }} >
                </Input>
            </View>
            <View>
                <Button onPress={submitHandler} title='Update this car' ></Button>
            </View>
        </View>
    )
    
}

export default UpdateScreen