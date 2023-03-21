

// generates team markup based of role
const teamGen = team => {
    const mngrGen = manager => {
        return `
    <div class="card">
        <div class="card-titles">
            <h2>${manager.getName()}</h2>
            <h3><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
        </div>
        <div class="emp-details">
            <p class="detail-spacer"> ID:${manager.getId()}</p>
            <p class="detail-spacer"> Email:${manager.getEmail()}</p>
            <p class="detail-spacer"> Office Number:${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `};
    const engGen = engineer => {
        return `
    <div class="card">
        <div class="card-titles">
            <h2>${engineer.getName()}</h2>
            <h3><i class="fa-solid fa-mug-hot"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="emp-details">
            <p class="detail-spacer"> ID:${engineer.getId()}</p>
            <p class="detail-spacer"> Email:${engineer.getEmail()}</p>
            <p class="detail-spacer"> Github:${engineer.getGithub()}</p>
        </div>
    </div>
        `};
    const intGen = intern => {
        return `
    <div class="card">
        <div class="card-titles">
            <h2>${intern.getName()}</h2>
            <h3><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}</h3>
        </div>
        <div class="emp-details">
            <p class="detail-spacer"> ID:${intern.getId()}</p>
            <p class="detail-spacer"> Email:${intern.getEmail()}</p>
            <p class="detail-spacer"> School:${intern.getSchool()}</p>
        </div>
    </div>
    `};

        const markup =[];
            // pushes markups needed to the array
    markup.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => mngrGen(manager))
        .join("")

    );
    markup.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engGen(engineer))
        .join("")
    );
    markup.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => intGen(intern))
        .join("")
    );

    return markup.join("");
};

// exports html template with teamgen(assembleTeam) to combine all the data
module.exports = assembleTeam => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/dist/index.css">
            <script src="https://kit.fontawesome.com/cd452f7403.js" crossorigin="anonymous"></script>

            <title>Dream Team</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
                <div class="bulk">   
                    <section class="container">
                        
                    ${teamGen(assembleTeam)}
                        
                    </section>
                </div> 
        </body>
    </html>

    `;
};





