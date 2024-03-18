import { EmploymentHistoryList } from "@/clientComponents";

export const EmploymentHistory = () => {
  return (
    <div id="resume" className="grid_container mx-auto top_scroll">
      <header>
        <h2>Employment History</h2>
      </header>
      <div>
        <EmploymentHistoryList />
      </div>
    </div>
  );
}
