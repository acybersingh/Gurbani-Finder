import { View, Text } from 'react-native';
import { Button } from '@/components/ui/Button';

export default function HomeScreen() {
  const handleScanPress = () => {
    // TODO: Navigate to camera screen
    console.log('Scan Shabad pressed');
  };

  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      {/* App Title */}
      <Text className="text-4xl font-bold text-navy mb-2">
        GurBani Finder
      </Text>

      {/* Subtitle */}
      <Text className="text-lg text-gray-600 mb-8 text-center">
        Point your camera at the projector
      </Text>

      {/* Main CTA Button */}
      <View className="w-full max-w-xs mb-4">
        <Button
          title="📷 Scan Shabad"
          variant="primary"
          onPress={handleScanPress}
        />
      </View>

      {/* Helper Text */}
      <Text className="text-sm text-gray-500 text-center">
        Identify shabads in &lt;3 seconds
      </Text>

      {/* Beta Badge */}
      <View className="absolute bottom-8">
        <Text className="text-xs text-saffron font-semibold">
          BETA • Launching Jan 5, 2026
        </Text>
      </View>
    </View>
  );
}
