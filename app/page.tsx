import Chart from "@/components/Chart";
import FeaturedInfo from "@/components/FeaturedInfo";
import WidgetLg from "@/components/WidgetLg";
import WidgetSm from "@/components/WidgetSm";
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
      <div className="grid grid-cols-3 gap-3">
        <WidgetSm />
        <WidgetLg />
      </div>
    </main>
  );
}
