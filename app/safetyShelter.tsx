import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import InfoCard from '../components/infoCard';
import { useServerApi } from '../hooks/useServerApi';
import { styles } from '../styles/infoCardStyles';
import { colors } from '../styles/theme';

export default function SafetyShelterScreen() {
  const { initiateCall } = useServerApi();
  const defaultPhoneNumber = process.env.EXPO_PUBLIC_DEFAULT_PHONE_NUMBER!;

  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleToggle = (id: string, checked: boolean) => {
    setSelectedCards(prev => (checked ? [...prev, id] : prev.filter(cardId => cardId !== id)));
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
      <ScrollView>
        {cards.map(card => (
          <InfoCard key={card.id} id={card.id} title={card.title} onToggle={handleToggle} />
        ))}
      </ScrollView>

      <Pressable
        style={[styles.button, selectedCards.length === 0 && { opacity: 0.5 }]}
        disabled={selectedCards.length === 0}
        onPress={() => initiateCall(defaultPhoneNumber)}
      >
        <Text style={styles.buttonText}>Have AI Call These Services</Text>
      </Pressable>
    </View>
  );
}
