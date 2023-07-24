import { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { supabase } from '/Users/meenu/PhotoLingo-final/lib/supabase.js';

const Gallery = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch predictions data from the 'predictions' table in Supabase
      const { data, error } = await supabase.from('predictions').select('*');
      if (!error) {
        setPredictions(data);
      } else {
        console.error('Error fetching predictions:', error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.predictionText}>{item.prediction}</Text>
    </View>
  );

  return (
    <FlatList
      data={predictions}
      keyExtractor={(item) => item.image_url}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  predictionText: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Gallery;