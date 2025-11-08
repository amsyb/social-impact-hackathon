import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import ConversationCard from '../../components/conversationCard';
import FilterBar from '../../components/filterBar';
import SearchBar from '../../components/searchBar';
import { transcripts } from '../../data/transcriptData';
import { styles } from '../../styles/transcriptStyles';

interface Transcript {
  id: string;
  title: string;
  status: 'In Progress' | 'Completed';
  summary: string;
}

interface Filters {
  status: 'All' | 'In Progress' | 'Completed';
}

export default function TranscriptPage() {
  const [selectedTranscript, setSelectedTranscript] = useState<Transcript | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ status: 'All' });

  const filteredTranscripts = transcripts.filter(transcript => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || transcript.title.toLowerCase().includes(query);
    const matchesStatus = filters.status === 'All' || transcript.status === filters.status;
    return matchesSearch && matchesStatus;
  });

  return (
    <View style={styles.page}>
      <View>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>

      <FilterBar filters={filters} setFilters={setFilters} />

      <ScrollView contentContainerStyle={styles.container}>
        {filteredTranscripts.length > 0 ? (
          filteredTranscripts.map(transcript => (
            <ConversationCard
              key={transcript.id}
              transcript={transcript}
              onPress={() => setSelectedTranscript(transcript)}
            />
          ))
        ) : (
          <Text style={styles.noResults}>
            No transcripts found. Try adjusting your search or filters!
          </Text>
        )}
      </ScrollView>

      {selectedTranscript && (
        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>{selectedTranscript.title}</Text>
          <Pressable onPress={() => setSelectedTranscript(null)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
