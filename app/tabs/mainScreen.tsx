import { ScrollView, Text, View } from 'react-native';
import { ChatComponent } from '../../components/aiChatComponent';
import { styles } from '../../styles/mainScreenStyles';

export default function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Main Screen</Text>
          <View style={styles.card}>
            {/* Chat Component */}
            <ChatComponent />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
