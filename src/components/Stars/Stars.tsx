import Star from '../Star/Star';

interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const starsArray = Array(count).fill(null);

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};

export default Stars;