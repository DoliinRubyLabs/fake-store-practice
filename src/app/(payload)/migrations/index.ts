import * as migration_20250625_010636 from './20250625_010636'

export const migrations = [
  {
    up: migration_20250625_010636.up,
    down: migration_20250625_010636.down,
    name: '20250625_010636',
  },
]
