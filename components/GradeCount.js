import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import axios from 'axios';
import { sortBy } from 'lodash';
import { PieChart } from 'react-native-chart-kit';

const GradeCount = () => {
  const [professeurs, setProfesseurs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://troubled-red-garb.cyclic.app/professeurs`);
      setProfesseurs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateTableData = () => {
    const gradeCounts = {};

    professeurs.forEach((prof) => {
      const grade = prof.grade.split(';');
      grade.forEach((grade) => {
        if (gradeCounts[grade]) {
          gradeCounts[grade]++;
        } else {
          gradeCounts[grade] = 1;
        }
      });
    });

    const tableData = Object.entries(gradeCounts).map(([grade, count]) => ({
      grade,
      count,
    }));

    const sortedTableData = sortBy(tableData, (item) => -item.count).slice(0, 15);

    return sortedTableData;
  };

  const renderTableItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ flex: 1 }}>{item.grade}</Text>
      <Text style={{ flex: 1 }}>{item.count}</Text>
    </View>
  );

  const chartData = generateTableData().map((item) => ({
    name: item.grade,
    population: item.count,
    color: '#' + ((Math.random() * 0xffffff) << 0).toString(16), // Generate a random color for each slice
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 30, paddingTop: 50 }}>
      <Card>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, paddingTop: 20, marginLeft: 12 }}>
          Grades (Top 15)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}
        >
          <Text style={{ flex: 1, fontWeight: 'bold', marginLeft: 20, paddingTop: 20 }}>Grade</Text>
          <Text style={{ flex: 1, fontWeight: 'bold', paddingTop: 20 }}>Nombre</Text>
        </View>
        <FlatList data={generateTableData()} keyExtractor={(item) => item.grade} renderItem={renderTableItem} />
        <PieChart
          data={chartData}
          width={300}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 147, 111, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </Card>
    </SafeAreaView>
  );
};

export default GradeCount;
