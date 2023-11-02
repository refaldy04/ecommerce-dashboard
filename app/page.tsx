import Chart from "@/components/Chart";
import FeaturedInfo from "@/components/FeaturedInfo";
import { userData } from "@/dummyData";

export default function Home() {
  return (
    <main className="px-2">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid
      />
    </main>
  );
}
