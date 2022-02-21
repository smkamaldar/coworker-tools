const members = require("./members");

members.forEach(member => {
    const { id, firstname, lastname, jobtitle } = member
    console.log(`${id}- ${firstname} ${lastname} works as ${jobtitle}`)
})

//to execute the above code type => node filename