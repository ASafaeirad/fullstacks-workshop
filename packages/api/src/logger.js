import { Signale, morgan } from '@frontendmonster/dev-utils/logger';

export const logger = Signale('api');
export { morgan };

export const logServerStat = ({ port, env } = {}) => {
  logger.success(`Server ready at ${port}`);
  logger.warning('Environment: ', env);
};
