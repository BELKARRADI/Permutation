import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
const Charts = () => {
  const data = [
    { name: 'Data 1', population: 20, color: '#297AB1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 2', population: 50, color: '#C0C0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 3', population: 30, color: '#FF7F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 4', population: 30, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 5', population: 20, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 6', population: 50, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 7', population: 30, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Data 8', population: 30, color: 'white', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default Charts;
