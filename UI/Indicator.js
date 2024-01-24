import {View,Text,ActivityIndicator,StyleSheet} from 'react-native'

function Indicator({style,size,color}){
    <View style={styles.container}>

            <ActivityIndicator style={style} size = {size} color={color} >   
            </ActivityIndicator>
         </View>
}

export default Indicator


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})