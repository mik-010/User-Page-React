import "./ActivityCard.css";

export default function ActivityCard({
  logoUrl,
  activityName,
  context,
  status,
  statusLogo,
  backgroundColor
}) {
  return (
    <>
      <div className="activity-card">
        <div className="activity">
          <p className="card-title">{activityName}</p>
          <div className="activity-logo-bg" style={{ background: backgroundColor }}> 
            <img src={logoUrl} alt={activityName} width="20px" height="20px" />
          </div>
        </div>
        <div className="activity-context">
          <p className="context">{context}</p>
          <div className="status-logo">
            <img src={statusLogo} alt={status} width="15px" height="15px" />
            {status}
          </div>
        </div>
      </div>
    </>
  );
}