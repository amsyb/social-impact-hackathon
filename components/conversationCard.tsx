import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/conversationCardStyles';

interface ConversationCardProps {
  transcript: {
    id: string;
    title: string;
    status: 'In Progress' | 'Completed';
    summary: string;
  };
  onPress?: () => void;
}

export default function ConversationCard({ transcript, onPress }: ConversationCardProps) {
  const { title, status, summary } = transcript;

  // pick style based on status
  const statusStyle = status === 'In Progress' ? styles.inProgress : styles.completed;

  const dotStyle = status === 'In Progress' ? styles.dotInProgress : styles.dotCompleted;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.statusContainer, statusStyle]}>
          <View style={[styles.dot, dotStyle]} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <Text style={styles.summary}>{summary.slice(0, 100)}...</Text>
    </Pressable>
  );
}
