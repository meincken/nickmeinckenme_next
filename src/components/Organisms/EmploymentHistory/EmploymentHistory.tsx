import { EmploymentHistoryList } from "@/components/Client";
import data from '@/content/roles.json'

export const EmploymentHistory = () => {
  return (
    <div id="resume" className="grid_container mx-auto top_scroll">
      <header>
        <h2>{data.title}</h2>
      </header>
      <div>
        <EmploymentHistoryList />
      </div>
    </div>
  );
}
