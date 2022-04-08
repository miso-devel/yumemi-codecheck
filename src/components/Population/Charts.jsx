import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export const Charts = ({ population }) => {
  const options = {
    title: {
      text: "My chart",
    },
    xAxis: {
      categories: population.length == 1 ? [[0]] : population[1].years,
      title: {
        text: "年",
      },
    },
    yAxis: {
      categories: [0],
      title: {
        text: "人口数",
      },
    },
    series:
      population.length == 1
        ? [
            {
              name: "都道府県名",
              data: [0],
            },
          ]
        : population,
  };
  return (
    <div>
      <p>charts</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
