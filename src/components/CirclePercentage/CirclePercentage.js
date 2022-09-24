import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './_circlePercentage.scss';

const CirclePercentage = ({ vote }) => {
  return (
    <div className="circleBox">
      <h2 className="ratingTitle">Rating:</h2>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={vote} text={`${vote}%`} />
      </div>
    </div>
  );
};

export default CirclePercentage;
