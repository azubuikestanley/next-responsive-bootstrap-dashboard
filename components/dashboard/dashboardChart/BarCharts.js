import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const LineCharts = () => {

  const data = [
    {period: 1, earnings: 13000},
    {period: 2, earnings: 16500},
    {period: 3, earnings: 14250},
    {period: 4, earnings: 19000},
    {period: 5, earnings: 39000},
    {period: 6, earnings: 43000},
  ];

  return (
    <VictoryChart
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6]}
        tickFormat={["Older", "Sep 18-24", "This week", "Oct 2-8", "Oct 9-15", "Future"]}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryBar
        data={data}
        x="period"
        y="earnings"
      />
    </VictoryChart>
  );
};

export default LineCharts;
