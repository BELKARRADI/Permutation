import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2023. Tous droits réservés. Développé par M.BELKARRADI 
      </Text>
      <Text style={styles.text}>      <Ionicons name="logo-whatsapp" size={20} color="green" />{'\t'}{'\t'}
+212 604 130 990 {'\t'}{'\t'}<Ionicons name="card-outline" size={20} color="green" />{'\t'}{'\t'}
      mbelkarradi@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
});

export default Footer;
