import Activity from "./activities/Activity";
import "./RecentActivity.css";

export default function RecentActivity() {
  return (
    <>
      <div className="recent">
        <div>
          <div className="rec-activity-header">
            <div className="rec-activity-logo">
              <img src="/activity.svg" width="20px" height="20px" />
            </div>
            <p className="recActivity">Recent Activity</p>
          </div>
          <p className="actTitle">Your recent dashboard activities</p>
        </div>
        <div className="recent-activities">
          <Activity
            accessStatus="Successfully logged in"
            pointColor="var(--color-green)"
            bgColor="var(--color-light-green)"
            activityUrl="/trending-up.svg"
          />
          <Activity
            accessStatus="Dashboard Accessed"
            pointColor="var(--color-dark-blue)"
            bgColor="var(--color-light-blue)"
            activityUrl="/activity-blue.svg"
          />
        </div>
      </div>
    </>
  );
}