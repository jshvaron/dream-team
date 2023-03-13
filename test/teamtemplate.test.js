const teamGen = require('dream-team/teamtemplate.js')


test('teamGen returns a string', () => {
    const team = [/* an array of employees */];
    const result = teamGen(team);
    expect(typeof result).toBe('string');
  });