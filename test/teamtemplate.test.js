const teamGen = require('dream-team/teamtemplate.js')

//test a return of teamGen string
test('teamGen returns a string', () => {
    const team = [/* an array of employees */];
    const result = teamGen(team);
    expect(typeof result).toBe('string');
  });

//test teamGen array for manager markup
test('teamGen generates markup for managers', () => {
const team = [
    { getRole: () => 'Manager', getName: () => 'John', getId: () => '1', getEmail: () => 'john@example.com', getOfficeNumber: () => '1011011001' },
    { getRole: () => 'Manager', getName: () => 'Jane', getId: () => '2', getEmail: () => 'jane@example.com', getOfficeNumber: () => '1021021022' },
];
const result = teamGen(team);
expect(result).toContain('<h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>');
expect(result).toContain('<p class="detail-spacer"> Office Number:1011011001</p>');
expect(result).toContain('<p class="detail-spacer"> Office Number:1021021022</p>');
});

//test teamGen array for engineer markup
test('teamGen generates markup for engineers', () => {
    const team = [
      { getRole: () => 'Engineer', getName: () => 'John', getId: () => '1', getEmail: () => 'john@example.com', getGithub: () => 'johndoe' },
      { getRole: () => 'Engineer', getName: () => 'Jane', getId: () => '2', getEmail: () => 'jane@example.com', getGithub: () => 'janedoe' },
    ];
    const result = teamGen(team);
    expect(result).toContain('<h3><i class="fa-solid fa-mug-hot"></i> Engineer</h3>');
    expect(result).toContain('<p class="detail-spacer"> Github:johndoe</p>');
    expect(result).toContain('<p class="detail-spacer"> Github:janedoe</p>');
  });

//test teamGen array for engineer markup
test('teamGen generates markup for interns', () => {
const team = [
    { getRole: () => 'Intern', getName: () => 'John', getId: () => '1', getEmail: () => 'john@example.com', getSchool: () => 'UCLA' },
    { getRole: () => 'Intern', getName: () => 'Jane', getId: () => '2', getEmail: () => 'jane@example.com', getSchool: () => 'USC' },
];
const result = teamGen(team);
expect(result).toContain('<h3><i class="fa-solid fa-mug-hot"></i>Intern</h3>');
expect(result).toContain('<p class="detail-spacer"> School:UCLA</p>');
expect(result).toContain('<p class="detail-spacer"> School:USC</p>');
});