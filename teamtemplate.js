

// generates team markup based of role
const teamgen = team => {
    const mngrGen = manager => {`
    <div class="card">
        <div class="card-titles">
            <h2>${manager.getName()}</h2>
            <h3><i class="fa-solid fa-mug-hot"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="emp-details">
            <p class="detail-spacer"> ID:${.getId()}</p>
            <p class="detail-spacer"> Email:${manager.getEmail()}</p>
            <p class="detail-spacer"> Office Number:${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `};
    const engGen = engineer => {`
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
    const intGen = intern => {`
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

        
};







