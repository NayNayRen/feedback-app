function FeedbackItem({ item }) {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;

// passed the item destructured to FeedbackItem from FeedbackList
// now the data from FeedbackData can be used as the prop 'item'
// created a shared folder containing Card.jsx, since it will be shared at multiple sources
