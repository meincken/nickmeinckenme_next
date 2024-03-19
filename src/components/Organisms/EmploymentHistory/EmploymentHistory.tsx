import { EmploymentHistoryList } from "@/components/Client";
import data from '@/data/home.json'

export const EmploymentHistory = () => {
  return (
    <div id="resume" className="grid_container mx-auto top_scroll">
      <header>
        <h2>{data.employmentTitle}</h2>
      </header>
      <div>
        <EmploymentHistoryList />
      </div>
    </div>
  );
}
