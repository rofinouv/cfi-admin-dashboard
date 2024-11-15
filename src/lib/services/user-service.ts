import { useQuery } from '@tanstack/react-query';
import { CountResponse } from 'src/types/response';
import { apiHandler } from '../handlers/api-handler';

export const fetchUsers = async () => {
  try {
    const result = await apiHandler.get<CountResponse>('/users');

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
