import {View,Text,TextInput,StyleSheet} from 'react-native'




function Input({label,style,textInputConfig}){
    let inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }


    return <View style={[styles.inputContainer,style]} >
        <Text style={styles.label} >{label}</Text>
        <TextInput style={styles.input} {...textInputConfig}></TextInput>
    </View>
}


export default Input


const styles = StyleSheet.create({
    inputContainer : {
        marginHorizontal:4,
        marginVertical:16,
    },
    label:{
        fontSize:12,
        color:'gray',
        marginBottom:4
    },
    input:{
        backgroundColor:'gray',
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:'black'
    },

    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    }
})