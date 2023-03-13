const teamGen = require('dream-team/teamtemplate.js')


test('teamGen returns a string', () => {
    const team = [/* an array of employees */];
    const result = teamGen(team);
    expect(typeof result).toBe('string');
  });


test('teamGen generates markup for managers', () => {
const team = [
    { getRole: () => 'Manager', getName: () => 'John', getId: () => '1', getEmail: () => 'john@example.com', getOfficeNumber: () => '1011011001' },
    { getRole: () => 'Manager', getName: () => 'Jane', getId: () => '2', getEmail: () => 'jane@example.com', getOfficeNumber: () => '1021021022' },
];
const result = teamGen(team);
expect(result).toContain('<h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>');
expect(result).toContain('<p class="detail-spacer"> Office Number:101</p>');
expect(result).toContain('<p class="detail-spacer"> Office Number:102</p>');
});