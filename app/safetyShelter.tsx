import { useState } from 'react';
import { Alert, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import InfoCard from '../components/infoCard';
import { useAuth } from '../context/authContext';
import { useServerApi } from '../hooks/useServerApi';
import { styles } from '../styles/infoCardStyles';
import { colors } from '../styles/theme';

export default function SafetyShelterScreen() {
  const { initiateCall } = useServerApi();
  const { user, isAuthenticated } = useAuth();
  const defaultPhoneNumber = process.env.EXPO_PUBLIC_DEFAULT_PHONE_NUMBER!;

  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [calling, setCalling] = useState(false);

  const handleToggle = (id: string, checked: boolean) => {
    setSelectedCards(prev => (checked ? [...prev, id] : prev.filter(cardId => cardId !== id)));
  };

  const handleCall = async () => {
    // Check if user is authenticated
    if (!isAuthenticated || !user?.uid) {
      const msg = 'Please sign in to make calls';
      if (Platform.OS === 'web') alert(msg);
      else Alert.alert('Authentication Required', msg);
      return;
    }

    if (selectedCards.length === 0) {
      const msg = 'Please select at least one service';
      if (Platform.OS === 'web') alert(msg);
      else Alert.alert('No Selection', msg);
      return;
    }

    setCalling(true);
    try {
      // Pass userId to initiateCall
      const response = await initiateCall(defaultPhoneNumber, user.uid);
      const msg = `Call initiated successfully!\nConversation ID: ${response.conversationId}`;
      if (Platform.OS === 'web') alert(msg);
      else Alert.alert('Success', msg);
      console.log('Call response:', response);
    } catch (error: any) {
      const msg = error?.message || 'Failed to initiate call';
      if (Platform.OS === 'web') alert(msg);
      else Alert.alert('Error', msg);
      console.error('Call error:', error);
    } finally {
      setCalling(false);
    }
  };

  const cards = [
    { id: '1', title: 'Hamilton Family Center' },
    { id: '2', title: 'St. Anthony Foundation' },
    { id: '3', title: 'Coalition on Homelessness' },
  ];

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: colors.primaryBg }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#482424' }}>
        Safety & Shelter Resources
      </Text>

      {!isAuthenticated && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#FFF3CD',
            borderRadius: 8,
            marginBottom: 16,
            borderLeftWidth: 4,
            borderLeftColor: '#FFC107',
          }}
        >
          <Text style={{ color: '#856404', fontSize: 14 }}>
            Please sign in to make calls and save your conversation history
          </Text>
        </View>
      )}

      <ScrollView>
        {cards.map(card => (
          <InfoCard key={card.id} id={card.id} title={card.title} onToggle={handleToggle} />
        ))}
      </ScrollView>

      <Pressable
        style={[
          styles.button,
          (selectedCards.length === 0 || calling || !isAuthenticated) && { opacity: 0.5 },
        ]}
        disabled={selectedCards.length === 0 || calling || !isAuthenticated}
        onPress={handleCall}
      >
        <Text style={styles.buttonText}>
          {calling ? 'Calling...' : 'Have AI Call These Services'}
        </Text>
      </Pressable>
    </View>
  );
}
