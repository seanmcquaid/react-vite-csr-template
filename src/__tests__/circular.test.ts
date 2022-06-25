import { it, describe, expect } from 'vitest';
import madge from 'madge';

describe('dependencies', () => {
  it('has no circular dependencies', async () => {
    const paths = await madge('./src/main.tsx');
    expect(paths.circular()).toHaveLength(0);
  });
});
