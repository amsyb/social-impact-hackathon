import { Href, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/quickLinksStyles';

const quickLinksData = [
  { id: 1, title: 'Safety & Shelter', route: '/tabs/infoListScreen' },
  { id: 2, title: 'Food & Water', route: '/food-water' },
  { id: 3, title: 'Education & Employment Access', route: '/education-employment' },
  { id: 4, title: 'Physical & Mental Health Care', route: '/health-care' },
  { id: 5, title: 'Clothing & Personal Essentials', route: '/clothing-essentials' },
  { id: 6, title: 'Community & Belonging', route: '/community-belonging' },
];

export function QuickLinks() {
  const router = useRouter();

  const handlePress = (route: string, title: string) => {
    console.log('Navigating to:', route, title);
    router.push(route as Href); // Cast to Href to fix TypeScript error
  };

  return (
    <View style={styles.container}>
      <View style={styles.linksGrid}>
        {quickLinksData.map(link => (
          <Pressable
            key={link.id}
            style={({ pressed }) => [styles.linkButton, pressed && styles.linkButtonPressed]}
            onPress={() => handlePress(link.route, link.title)}
          >
            <Text style={styles.linkTitle}>{link.title}</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
