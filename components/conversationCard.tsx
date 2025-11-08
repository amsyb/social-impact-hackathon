interface ConversationCardProps {
  transcript: {
    id: string;
    title: string;
    status: 'In Progress' | 'Ongoing' | 'Completed';
    summary: string;
  };
  onClick?: () => void;
}

export default function ConversationCard({ transcript, onClick }: ConversationCardProps) {
  const { title, status, summary } = transcript;

  return (
    <div className="conversation-card" onClick={onClick}>
      <div className="conversation-card__header">
        <h3 className="conversation-card__title">{title}</h3>
        <span
          className={`conversation-card__status ${
            status === 'In Progress'
              ? 'in-progress'
              : status === 'Ongoing'
                ? 'ongoing'
                : 'completed'
          }`}
        >
          {status}
        </span>
      </div>

      <p className="conversation-card__summary">{summary.slice(0, 100)}...</p>
      <p className="conversation-card__summary-fade">{summary.slice(100, 200)}...</p>
    </div>
  );
}
