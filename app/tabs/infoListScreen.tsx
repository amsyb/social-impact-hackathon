import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import InfoCard from '../../components/infoCard';
import { useAuth } from '../../context/authContext';
import { useServerApi } from '../../hooks/useServerApi';
import { styles } from '../../styles/infoCardStyles';
import { gradients } from '../../styles/theme';

export default function InfoListScreen() {
  const { initiateCall } = useServerApi();
  const { user, isAuthenticated } = useAuth();
  const defaultPhoneNumber = process.env.EXPO_PUBLIC_DEFAULT_PHONE_NUMBER!;
  const [calling, setCalling] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleToggle = (id: string, checked: boolean) => {
    setSelectedCards(prev => (checked ? [...prev, id] : prev.filter(cardId => cardId !== id)));
  };

  const cards = [
    { id: '1', title: 'SF Home' },
    { id: '2', title: 'Youth Services' },
    { id: '3', title: 'Job Support' },
  ];

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

  return (
    <LinearGradient
      colors={gradients.primary.colors}
      start={gradients.primary.start}
      end={gradients.primary.end}
      style={{ flex: 1 }} // Changed from styles.card
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={styles.pageTitle}>Safety & Shelter Resources</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cards.map(card => (
            <InfoCard key={card.id} id={card.id} title={card.title} onToggle={handleToggle} />
          ))}
        </ScrollView>

        <Pressable
          style={[styles.button, selectedCards.length === 0 && { opacity: 0.5 }]}
          disabled={selectedCards.length === 0}
          onPress={handleCall}
        >
          <Text style={styles.buttonText}>Have AI Call These Services</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
