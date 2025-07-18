import * as migration_20250718_010640 from './20250718_010640';

export const migrations = [
  {
    up: migration_20250718_010640.up,
    down: migration_20250718_010640.down,
    name: '20250718_010640'
  },
];
