import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Options = {
  title: { text: string }, 
  series: { type: string, data: { x?: number, y: number, name: string }[], name?: string }[], 
  xAxis?: { title: { text: string } }, 
  yAxis?: { title: { text: string } }, 
}

export const Chart = ({ options }: { options: Options }) => {
  return (
    <div className="border border-red-500 p-5 space-y-4 w-1/3">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
