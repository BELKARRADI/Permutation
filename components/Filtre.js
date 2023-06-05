import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import Footer from "./Footer"

const Filtre = () => {
  const [specialite, setSpecialite] = useState('');
  const [villeActuelle, setVilleActuelle] = useState('');
  const [villeDesiree, setVilleDesiree] = useState('');
  const [result, setResult] = useState([]);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [fResult, setFResult] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://troubled-red-garb.cyclic.app/professeurs`,
    };

    axios(config)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange1 = (text) => {
    setSpecialite(text);
  };

  const handleInputChange2 = (text) => {
    setVilleActuelle(text);
  };

  const handleInputChange3 = (text) => {
    setVilleDesiree(text);
  };

  const handleSubmit = () => {
    if (specialite === '' && villeActuelle === '' && villeDesiree === '') {
      setShowCard1(true);
    }
  };

  const handleRechercher = () => {
    if (specialite === ''  || villeActuelle === ''  || villeDesiree === '') {
      alert("Merci de remplire les trois champs")
      setShowCard2(true);
      setShowCard1(true);

    }
    axios.get('https://troubled-red-garb.cyclic.app/professeurs')
      .then(response => {
        const utilisateursFiltres = response.data.filter(utilisateur => {
          return (
            utilisateur.specialite.trim().toLowerCase() === specialite.trim().toLowerCase() &&
            utilisateur.villeFaculteActuelle.trim().toLowerCase() === villeActuelle.trim().toLowerCase() &&
            utilisateur.villeDesiree.toLowerCase().includes(villeDesiree.trim().toLowerCase())
          );
        });

        setFResult(utilisateursFiltres);
        setShowCard2(true);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  };

  return (
    <ScrollView>
      <Card style={{ marginLeft: 25, marginTop: 30 }}>
        <View style={styles.container}>
          <Text style={styles.label}>Spécialité: </Text>
          <TextInput
            style={styles.input}
            placeholder="Spécialité"
            value={specialite}
            onChangeText={handleInputChange1}
          />
          <Text style={styles.label}>Ville Actuelle: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ville Actuelle"
            value={villeActuelle}
            onChangeText={handleInputChange2}
          />
          <Text style={styles.label}>Ville Désirée: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ville Désirée"
            value={villeDesiree}
            onChangeText={handleInputChange3}
          />

          <View>
            <View style={styles.buttonContainer11}>
              <TouchableOpacity style={[styles.button, styles.profileButton1]} onPress={handleSubmit}>
                <View style={styles.container1}>
                  <Text style={styles.buttonText1}>Afficher</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.profileButton2]}
                onPress={() => {
                  setVilleActuelle('');
                  setSpecialite('');
                  setVilleDesiree('');
                  setShowCard1(false);
                  setShowCard2(false);
                }}
              >
                <View style={styles.container1}>
                  <Text style={styles.buttonText2}>Réinitialiser</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.profileButton3]} onPress={handleRechercher}>
                <View style={styles.container1}>
                  <Text style={styles.buttonText2}>Rechercher</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        {showCard1 && (
          <Card styles={{ width: '100%' }}>
            <Text  style={styles.Title}>Résultats de la recherche</Text>
            {result.map((item) => (
              <View style={styles.labelContainer} key={item._id}>
                <Ionicons name="person" size={18} color="black" />
                <Text style={styles.text}>
                  {item.nom} ({item.email} | {item.tel} | {item.grade}) - {item.specialite} - ({item.faculteActuelle} | {item.villeFaculteActuelle}) ---> {item.villeDesiree}
                </Text>
              </View>
            ))}
          </Card>
        )}
        {showCard2 && (
          <Card styles={{ width: '100%' }}>
            <Text  style={styles.Title}>Résultats de la recherche</Text>
            {fResult.map((item) => (
              <View style={styles.labelContainer} key={item._id}>
                <Ionicons name="person" size={18} color="black" />
                <Text style={styles.text}>
                  {item.nom} ({item.email} | {item.tel} | {item.grade}) - {item.specialite} - ({item.faculteActuelle} | {item.villeFaculteActuelle}) ---> {item.villeDesiree}
                </Text>
              </View>
            ))}
          </Card>
        )}
      </Card>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  Title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 10,
  },
  text: {
    width: '80%',
    flexWrap: 'wrap',
    margin: 20,
    fontSize: 17,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
    width: 100,
    marginHorizontal: "2%",
  },
  profileButton1: {
    backgroundColor: "blue",
    height: 25,
  },
  profileButton2: {
    backgroundColor: "green",
  },
  profileButton3: {
    backgroundColor: "red",
  },
  buttonText1: {
    color: "black",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 2,
  },
  buttonText2: {
    color: "black",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer11: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Filtre;
