import React from 'react';
import { TouchableHighlight,  StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from "react";
import { Input } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';




import Header from "../../Header/Header"


export default function ProgramObjectiveScreen({navigation}){

    const goBack = () => navigation.goBack();
    const [selectedLanguage, setSelectedLanguage] = useState();



    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.contentForm}>

                <Input  containerStyle={styles.textInput}
                        placeholder="Nom"
                        inputContainerStyle={{borderBottomWidth:0}}

                />
                <Input containerStyle={styles.textInput}
                       placeholder="Prenom"
                       inputContainerStyle={{borderBottomWidth:0}}
                />
                <Text>Programme choisis</Text>

                <Picker style={styles.selectObjectif
                }
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                    <Picker.Item label="Seance 10" value="Seance10" />
                    <Picker.Item label="Boxing Cardio" value="BoxinCardio" />
                    <Picker.Item label="Individual" value="Indiv" />
                </Picker>

                <Text>Objectif</Text>

                <Picker style={{height:45,
                                width:"70%",
                                color:"black",
                                borderBottomColor:"red",
                                borderBottomWidth:2,}}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Perte de poids" value="looseWeight" />
                    <Picker.Item label="Musculation" value="Muscu" />
                    <Picker.Item label="Remise en forme" value="Forme" />
                </Picker>

                <Text>Antècèdent</Text>
                <Input containerStyle={styles.textInput}
                       placeholder="Ville"
                       inputContainerStyle={{borderBottomWidth:0}}
                />

                <TouchableHighlight style={styles.nextPage} onPress={()=> navigation.navigate("ProgramObjective")}>
                    <Text style={styles.nextPageText}>Etape Suivant</Text>
                </TouchableHighlight>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#eeeeee",
        height: "100%",
    },
    contentForm:{
        marginTop: 40,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    textInput:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width:"70%",
        backgroundColor: '#e8e8e8',
        borderBottomColor: '#14b581',
        borderBottomWidth: 2,
        marginBottom:15,

    },

    nextPage:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#1a9f74",
        height: 40,
        width: 200,
        borderRadius:50,
        marginBottom: 30,
    },
    nextPageText:{
        color:"white",
        fontWeight: "700",
        fontSize: 18,
    },
    selectObjectif:{
        height:45,
        width:"70%",
        color:"black",
    }
});


