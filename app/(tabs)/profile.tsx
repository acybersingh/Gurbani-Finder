import { View, Text, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <View className="items-center mb-8">
        <View className="w-24 h-24 bg-saffron rounded-full items-center justify-center mb-4">
          <Text className="text-4xl">👤</Text>
        </View>
        <Text className="text-2xl font-bold text-navy">Welcome</Text>
        <Text className="text-gray-600 mt-2">GurBani Finder Beta</Text>
      </View>

      <View className="space-y-4">
        <TouchableOpacity className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <Text className="text-navy font-semibold">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <Text className="text-navy font-semibold">Recognition History</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <Text className="text-navy font-semibold">About</Text>
        </TouchableOpacity>

        <View className="mt-8 pt-6 border-t border-gray-200">
          <Text className="text-center text-gray-500 text-sm">
            Version 1.0.0 (Beta)
          </Text>
          <Text className="text-center text-gray-500 text-sm mt-2">
            Built with Seva for the Sangat
          </Text>
        </View>
      </View>
    </View>
  );
}
