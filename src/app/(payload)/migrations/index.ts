import * as migration_20250718_014735 from './20250718_014735';
import * as migration_20250723_200033 from './20250723_200033';
import * as migration_20250723_201238 from './20250723_201238';

export const migrations = [
  {
    up: migration_20250718_014735.up,
    down: migration_20250718_014735.down,
    name: '20250718_014735',
  },
  {
    up: migration_20250723_200033.up,
    down: migration_20250723_200033.down,
    name: '20250723_200033',
  },
  {
    up: migration_20250723_201238.up,
    down: migration_20250723_201238.down,
    name: '20250723_201238'
  },
];
