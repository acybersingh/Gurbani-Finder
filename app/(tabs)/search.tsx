import { View, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <Text className="text-3xl font-bold text-navy mb-4">🔍</Text>
      <Text className="text-2xl font-bold text-navy mb-2">Search</Text>
      <Text className="text-gray-600 text-center">
        Coming soon: Search by first letter, Ang number, or full text
      </Text>
    </View>
  );
}
