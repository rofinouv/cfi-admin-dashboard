import { useQuery } from '@tanstack/react-query';
import { GetAllStats } from 'src/types/response';
import { apiHandler } from '../handlers/api-handler';

export const fetchAllStats = async () => {
  try {
    const result = await apiHandler.get<GetAllStats>('/stats');

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const useStats = () =>
  useQuery({
    queryKey: ['stats'],
    queryFn: fetchAllStats,
  });
