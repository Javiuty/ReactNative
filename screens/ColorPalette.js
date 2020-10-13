import React from "react";
import { FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';


  const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];
  
  const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ];

const ColorPalette = ({ route }) => {

    const { colors, paletteName } = route.params;


  return (
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
      />
 
  );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });

export default ColorPalette;
