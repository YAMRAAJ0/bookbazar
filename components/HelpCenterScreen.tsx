// screens/HelpCenterScreen.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const HelpCenterScreen = () => {
  const sections = [
    {
      title: 'FAQs',
      items: [
        'Buying a Book',
        'Selling a Book',
        'Donating a Book',
        'Payments & Refunds',
        'Delivery & Shipping',
      ],
    },
    {
      title: 'Contact Support',
      items: ['Chat with Support', 'Call helpline'],
    },
    {
      title: 'Report an Issue',
      items: ['With Order'],
    },
    {
      title: 'Policies & Info',
      items: ['Terms & Conditions', 'Privacy Policy', 'Return/Refund Policy'],
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-6">❓ Help Center</Text>

      {sections.map((section, idx) => (
        <View key={idx} className="mb-6">
          <Text className="text-lg font-semibold mb-2">{section.title}</Text>
          {section.items.map((item, i) => (
            <TouchableOpacity
              key={i}
              className="bg-white p-4 rounded-lg shadow mb-2"
              onPress={() => console.log(`${item} pressed`)}
            >
              <Text className="text-gray-700">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default HelpCenterScreen;
