import React, { useState } from 'react';
import { View, Image,TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  const handleLogin = async () => {
    try {
      // Effectuer une requête GET vers l'API pour récupérer les informations des utilisateurs
      const response = await axios.get(`https://troubled-red-garb.cyclic.app/professeurs`);
      const users = response.data;
 

      // Vérifier si l'email et le mot de passe correspondent à un utilisateur dans la liste
      const authenticatedUser = users.find(user => user.email === email && user.nom === password);

      if (authenticatedUser) {
        console.log('Authentification réussie !');
        console.log(authenticatedUser)
        setUser(authenticatedUser); 
        navigation.navigate("Profile", { user: authenticatedUser })
        
        // Effectuer des actions supplémentaires pour accéder à l'application
      } else {
        alert('Identifiants incorrects.');
      }
    } catch (error) {
      console.log('Erreur lors de l\'authentification:', error);
    }

    // Réinitialiser les champs du formulaire
    setEmail('');
    setPassword('');
  };

  return (

    <View style={styles.container}>
       <Image source={require("../assets/image121.png")} style={styles.image} />
      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Se connecter"  onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '90%',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },image: {
        marginTop:-200,
         marginLeft:10,
         width: 200,
         height: 200,
         resizeMode: "contain",
       },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  },
});

export default Login;



     

