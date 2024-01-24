import { StyleSheet,Image, Pressable } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";



function CartItem({carId,imageUrl,brand,model,kilometer}){
    
    const Navigation = useNavigation();

    function carPressHandler(){
        Navigation.navigate('CarDetail',{
            id:carId,
        })
    }
    
    
    
    
    
    return (
        <Pressable onPress={carPressHandler}  >   
        <Card style={styles.card}>
          <Image style={styles.image} source={{ uri: imageUrl }} resizeMode='cover' />
          <Card.Content>
            <Title>{brand}</Title>
            <Paragraph>Model: {model}</Paragraph>
            <Paragraph>Kilometer: {kilometer}</Paragraph>
          </Card.Content>
        </Card>
        </Pressable>
      );
}

export default CartItem


const styles = StyleSheet.create({
    card: {
        margin: 16, 
      },
      image: {
        width: '100%', 
        height: 200,   
        alignSelf: 'center', 
      }
})