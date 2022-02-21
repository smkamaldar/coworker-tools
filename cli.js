/**
 * @description
 * A script for displaying information about coworkers
 * Can be called by running `npm start {command}` in the terminal
 *
 * @example
 * `npm start list`
 * Running this command will call the `runListCommand` function
 */

// The {command} the user types in the terminal e.g. "list"
const command = process.argv[2];

// The array of members that you defined in the previous task
const members = require("./members");

if (command === "list") {
  runListCommand();
} else {
  console.log(`Command "${command}" not found. Try "list" instead.`);
}

function runListCommand() {
  members.forEach(member => {
    const { id, firstname, lastname, jobtitle } = member
    console.log(`${id}- ${firstname} ${lastname} works as ${jobtitle}`)
  })
}
