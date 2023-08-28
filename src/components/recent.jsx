import "./recent.css";

const Recent = () => {
  const currentDate = new Date().toUTCString();

  return (
    <>
      <div className="recent">
        <div className="recent-head">
          <span className="time">{currentDate}</span>
          <small className="status-pending">Pending</small>
        </div>
        <h3>Upload excel to B1 </h3>
      </div>
      <div className="recent">
        <div className="recent-head">
          <span className="time">{currentDate}</span>
          <small className="status-done">Completed</small>
        </div>
        <h3>Upload excel to B1 </h3>
      </div>
    </>
  );
};

export default Recent;
