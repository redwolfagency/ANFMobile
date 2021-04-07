import React from 'react';
import { Button, Image, TouchableHighlight, ImageBackground, StyleSheet, Text, View, TextInput,SafeAreaView} from 'react-native';
import { Input } from 'react-native-elements'




import Header from "../../Header/Header"


export default function RegistrationScreen({navigation}){

    const goBack = () => navigation.goBack();
    const [text, onChangeText] = React.useState("Useless Text");

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
                    <Input containerStyle={styles.textInput}
                           placeholder="Rue"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="N°"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="Ville"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="Code Postal"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="Email"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="Mot de passe"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input containerStyle={styles.textInput}
                           placeholder="Mot de passe confirmation"
                           inputContainerStyle={{borderBottomWidth:0}}
                    />
                <TouchableHighlight style={styles.nextPage} onPress={()=> navigation.navigate("ProgramObjectiveScreen")}>
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
        backgroundColor: "#e8e8e8",
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
});
