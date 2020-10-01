import DaData from 'dadata';
import config from '../config';

export const ddata = new DaData(config.dadata.api_key, config.dadata.secret_key);