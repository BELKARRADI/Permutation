import React, { useState } from 'react';
import { ScrollView, View, TextInput,TouchableOpacity, Button, Text, StyleSheet, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";
import Footer from "./Footer"

const ProfileCreate = ({ route }) => {
    const { user } = route.params;
    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);
    const [telephone, setTelephone] = useState(user.tel);
    const [email, setEmail] = useState(user.email);
    const [specialite, setSpecialite] = useState(user.specialite);
    const [grade, setGrade] = useState(user.grade);
    const [etablissement, setEtablissement] = useState(user.faculteActuelle);
    const [villeActuelle, setVilleActuelle] = useState(user.villeFaculteActuelle);
    const [villeDesiree, setVilleDesiree] = useState(user.villeDesiree);
    console.log(villeDesiree)
    const handleSubmit = () => {
        console.log("hey")
    };
    
    const handleInputChange1 = (text) => {
        setNom(text);
    };

    const handleInputChange2 = (text) => {
        setPrenom(text);
    };

    const handleInputChange3 = (text) => {
        setTelephone(text);
    };

    const handleInputChange4 = (text) => {
        setEmail(text);
    };

    const handleInputChange5 = (text) => {
        setGrade(text);
    };

    const handleInputChange6 = (text) => {
        setEtablissement(text);
    };

    const handleInputChange7 = (text) => {
        setSpecialite(text);
    };


    const handleInputChange8 = (text) => {
        setVilleActuelle(text);
    };

    const handleInputChange9 = (text) => {
        setVilleDesiree(text);
    };
    /////////////////////////////////////////////////////
    const handleConfirmer = () => {
        Alert.alert("Bien enregistré", "Vous pouvez maintenant chercher une possibilité de permutation");
    }

  const handleSupprimer = () => {
    Alert.alert(
        "Confirmation de suppression",
        "Êtes-vous sûr de vouloir supprimer votre compte ?",
        [{
            text:'Annuler',
            onPress :()=>{
                console.log("Suppression Annuler")

            }
        },{
            text:'Confirmer la suppression',
            onPress :()=>{
                console.log("Suppression confirmée")

            }
        } ]
    )
  };


    ////////////////////////////////////////////////////


    return (

        <ScrollView>

            {/* <Text style={styles.Title}>Profil</Text> */}
            <Card style={{ marginLeft: 25, marginTop: 30 }}>
                <View style={styles.container}>

                    <View style={styles.labelContainer}>
                        <Ionicons name="person" size={18} color="black" />
                        <Text style={styles.label}>Nom: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom"
                        value={nom}
                        onChangeText={handleInputChange1}
                    />

                    <View style={styles.labelContainer}>
                        <Ionicons name="person" size={18} color="black" />
                        <Text style={styles.label}>Prenom: </Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Preom"
                        value={prenom}
                        onChangeText={handleInputChange2}
                    />

                    <View style={styles.labelContainer}>
                        <Ionicons name="call" size={18} color="black" />
                        <Text style={styles.label}>Telephone: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Telephone"
                        value={telephone}
                        onChangeText={handleInputChange3}
                    />


                    <View style={styles.labelContainer}>
                        <Ionicons name="mail" size={18} color="black" />
                        <Text style={styles.label}>Email: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleInputChange4}
                        editable={false}
                    />
                    <View style={styles.labelContainer}>
                        <Ionicons name="school" size={18} color="black" />
                        <Text style={styles.label}>Grade: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Grade"
                        value={grade}
                        onChangeText={handleInputChange5}
                    />
                    <View style={styles.labelContainer}>
                        <Ionicons name="business" size={18} color="black" />
                        <Text style={styles.label}>Etablissement: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Etablissement"
                        value={etablissement}
                        onChangeText={handleInputChange6}
                    />
                    <View style={styles.labelContainer}>
                        <Ionicons name="book" size={18} color="black" />
                        <Text style={styles.label}>Specialite: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Specialite"
                        value={specialite}
                        onChangeText={handleInputChange7}
                    />
                    <View style={styles.labelContainer}>
                        <Ionicons name="location" size={18} color="black" />
                        <Text style={styles.label}>Ville Actuelle: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Ville Actuelle"
                        value={villeActuelle}
                        onChangeText={handleInputChange8}
                    />

                    <View style={styles.labelContainer}>
                        <Ionicons name="location" size={18} color="black" />
                        <Text style={styles.label}>Ville Desirée: </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Ville Desiree"
                        value={villeDesiree}
                        onChangeText={handleInputChange9}
                    />


                    
                    <View>
                        <View style={styles.buttonContainer11}>
                            <TouchableOpacity style={[styles.button, styles.profileButton1]}>
                                <View style={styles.container1}>
                                    <Text style={styles.buttonText1} onPress={handleConfirmer}>Modifier</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.profileButton2]}>
                                <View style={styles.container1}>
                                    <Text style={styles.buttonText2}  onPress={handleSupprimer}>Supprimer mon compte</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>

            </Card>
        <Footer/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 16,
    },
    Title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        marginLeft: 10,

    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        marginLeft: 10,
    },button: {
        backgroundColor: "red",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 10,
        width: 150,
        marginHorizontal: "2%",
    
      },  profileButton1: {
        backgroundColor: "blue", 
        height:60// Remplacez par la couleur souhaitée pour le bouton "Profile"
      },
      profileButton2: {
        backgroundColor: "red", // Remplacez par la couleur souhaitée pour le bouton "Profile"
      },
    
      buttonText1: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop:5
      },
      buttonText2: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      },
      buttonContainer11: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Optional: Adjust the spacing between the image and buttons
      },

});

export default ProfileCreate;
