export type CountResponse = {
  count: number;
};

export type MonthlyStatsResponse = {
  categories: string[];
  series: number[];
};

export type GetAllStats = {
  projects: MonthlyStatsResponse;
  users: MonthlyStatsResponse;
  categories: MonthlyStatsResponse;
  groups: MonthlyStatsResponse;
};
