import axios from 'axios';
import { URL_CONSTANTS } from '../constants/url-constants';

export const apiHandler = axios.create({
  baseURL: URL_CONSTANTS.api,
  timeout: 1000 * 10,
});
