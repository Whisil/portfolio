import { getProject, projects } from './projects';

describe('project registry', () => {
  it('contains the four projects exposed by the homepage', () => {
    expect(projects.map((project) => project.slug)).toEqual([
      'partly',
      'plurabook',
      'syrnyk',
      'nokeep',
    ]);
  });

  it('resolves a project by its route slug', () => {
    expect(getProject('plurabook')?.name).toBe('Plurabook');
    expect(getProject('missing-project')).toBeUndefined();
  });
});
