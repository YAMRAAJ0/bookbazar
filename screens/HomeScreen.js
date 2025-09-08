import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const products = [
    { id: '1', title: 'Book A', price: '$10' },
    { id: '2', title: 'Book B', price: '$12' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}
