import React, { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";
import ProfessorsCount from "./ProfessorsCount"
import ProfessorsCountSpec from "./ProfessorsCountSpec"
import VilleCount from "./VilleCount"
import GradeCount from "./GradeCount"
import Footer from "./Footer"




export default function Statistiques({navigation}) {

  return (
    <ScrollView>
      <ProfessorsCount/>
      <ProfessorsCountSpec/>
      <VilleCount/>
      <GradeCount/>
      <Footer/>


            
            

      
    </ScrollView>
  );
};

