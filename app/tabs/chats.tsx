import { useState } from 'react';
import ConversationCard from '../../components/conversationCard';
import FilterBar from '../../components/filterBar';
import SearchBar from '../../components/searchBar';
import { transcripts } from '../../data/transcriptData';

interface Transcript {
  id: string;
  title: string;
  status: 'In Progress' | 'Ongoing' | 'Completed';
}

interface Filters {
  status: 'All' | 'In Progress' | 'Ongoing';
}

export default function TranscriptPage() {
  const [selectedTranscript, setSelectedTranscript] = useState<Transcript | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    status: 'All',
  });

  const filteredTranscripts = transcripts.filter(transcript => {
    const query = searchQuery.toLowerCase();

    const matchesSearch = searchQuery === '' || transcript.title.toLowerCase().includes(query);

    const matchesStatus = filters.status === 'All' || transcript.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="transcript-page">
      <div className="transcript-page__header">
        <div className="transcript-page__title">
          <h1 className="transcript-page__heading">Transcripts</h1>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="transcript-container">
        {filteredTranscripts.length > 0 ? (
          filteredTranscripts.map(transcript => (
            <ConversationCard
              key={transcript.id}
              transcript={transcript}
              onClick={() => setSelectedTranscript(transcript)}
            />
          ))
        ) : (
          <p className="no-results">No transcripts found. Try adjusting your search or filters!</p>
        )}
      </div>

      {selectedTranscript && (
        <div className="overlay">
          <h2>{selectedTranscript.title}</h2>
          <button onClick={() => setSelectedTranscript(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
