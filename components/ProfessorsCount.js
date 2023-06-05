import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text ,StyleSheet} from 'react-native';
import { Card } from 'react-native-shadow-cards';

const ProfessorsCount = () => {
    const [countProf, setCountProf] = useState(0);


    useEffect(() => {
      var config = {
          method: "get",
          url: `https://troubled-red-garb.cyclic.app/professeurs`,
      };

      axios(config)
          .then((response) => {
              // console.log(JSON.stringify(response.data));
              var count = Object.keys(response.data).length;


              setCountProf(count);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

    return (
        <View style={{paddingLeft:30,paddingTop:30}}>
          <Card style={styles.card} >
            <Text style={styles.cardText} >Nombre de professeurs inscrits : {countProf}</Text>
          </Card>
        </View>
      );
      
};
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardText: {
      fontSize: 18,
      marginTop:15,
      marginBottom:15,

      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  

export default ProfessorsCount;
