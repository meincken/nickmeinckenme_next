import { EmploymentHistoryList } from "@/clientComponents";

export const EmploymentHistory = () => {
  return (
    <div id="resume" className="grid_container mx-auto">
      <h2>Employment History</h2>
      <div>
        <EmploymentHistoryList />
      </div>
    </div>
  );
}
