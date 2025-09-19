import "./Activity.css";

export default function Activity({ activityUrl, accessStatus, pointColor ,bgColor}) {
  return (
    <>
      <div className="activity-container" style={{background: bgColor}}>
        <div className="activity-body">
          <div className="point" style={{background: pointColor}}></div>
          <div>
            <p className="accessStatus">{accessStatus}</p>
            <div className="user-status">
              <img src="/clock-gray.svg" width="15px" height="15px" />
              <p>Just Now</p>
            </div>
          </div>
        </div>
        <img src={activityUrl} />
      </div>
    </>
  );
}