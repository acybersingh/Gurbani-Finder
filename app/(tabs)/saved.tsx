import { View, Text } from 'react-native';

export default function SavedScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <Text className="text-3xl font-bold text-navy mb-4">📚</Text>
      <Text className="text-2xl font-bold text-navy mb-2">Saved Shabads</Text>
      <Text className="text-gray-600 text-center">
        Your bookmarked shabads and collections will appear here
      </Text>
    </View>
  );
}
