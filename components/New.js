import React, { useState } from "react";
import { Card,Button, StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";
import Footer from "./Footer";





export default function New({ navigation }) {
  return (
    <ScrollView>
    
            
            
           
            

      <Text style={styles.title}>Plateforme de Permutation pour Enseignants Universitaires</Text>
      <Text style={styles.body}>
        Cette plateforme est simplement un espace permettant aux professeurs universitaires de rechercher un partenaire pour une permutation. Elle se limite à cette fonctionnalité. Les enseignants peuvent rechercher des partenaires intéressés par un échange dans d'autres établissements d'enseignement supérieur. Le système facilite la recherche et la correspondance entre les enseignants ayant une volonté mutuelle d'échanger.

        La plateforme offre une interface conviviale et sécurisée aux enseignants pour communiquer et échanger les informations nécessaires. Les membres peuvent créer des profils personnels et renseigner des informations concernant leurs spécialités, les établissements et les informations de contact. Les enseignants peuvent consulter les profils des partenaires potentiels et entrer en contact avec eux pour discuter des détails de l'accord d'échange.

        En utilisant cette plateforme, les enseignants peuvent faciliter leur recherche de partenaires d'échange, économiser du temps et des efforts en évitant les communications individuelles et les recherches continues d'opportunités d'échange. Ce système est efficace et utile pour les enseignants souhaitant changer d'institution ou travailler dans un nouvel établissement pour élargir leur expérience académique.
      </Text>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    margin: 40,
 
    textShadowRadius: 2,
  },
  body: {
    fontSize: 17,
    textAlign: 'justify',
    margin: 40,
    lineHeight: 24,
  },
  
});








