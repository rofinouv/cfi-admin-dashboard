export type CountResponse = {
  count: number;
};

export type MonthlyStatsResponse = {
  categories: string[];
  series: number[];
  percentDiff: number;
} & CountResponse;

export type GetAllStats = {
  projects: MonthlyStatsResponse;
  users: MonthlyStatsResponse;
  categories: MonthlyStatsResponse;
  groups: MonthlyStatsResponse;
};
