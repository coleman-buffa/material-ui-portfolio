const mongoose = require("mongoose");
const Projects = require("../models/project.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolioDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let projectSeed = [
  //Add seed values that satisfy model requirements
  {
    title: "Media Plug",
    description: "User authenticated full stack application built in a team setting",
    image_link: "./images/media-plug.gif",
    repo_link: "https://github.com/coleman-buffa/media-plug",
    deployed_link: "https://media-plug.herokuapp.com/",
    skills: ["MySQL", "Express.js", "React.js", "Node.js", "Material-UI", "Auth0"]
  },
  {
    title: "Book Reactor",
    description: "MERN Stack App using Google Books API",
    image_link: "./images/book-reactor.gif",
    repo_link: "https://github.com/coleman-buffa/react-books",
    deployed_link: "https://book-reactor.herokuapp.com/search",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Bulma"]
  },
  {
    title: "Mineral Mania",
    description: "Try to click on each image once and only once!",
    image_link: "./images/mineral-mania.gif",
    repo_link: "https://github.com/coleman-buffa/click-game",
    deployed_link: "https://coleman-buffa.github.io/click-game/",
    skills: ["React.js", "Node.js", "Bootstrap"]
  },
  {
    title: "Fitness Tracker",
    description: "Track your daily workouts to improve your fitness",
    image_link: "./images/fitness-tracker.gif",
    repo_link: "https://github.com/coleman-buffa/fitness-tracker",
    deployed_link: "https://cryptic-woodland-44713.herokuapp.com/",
    skills: ["MongoDB", "Express.js", "Node.js", "Mongoose"]
  },
  {
    title: "Party X",
    description: "Full stack project built with a team",
    image_link: "./images/party-x.gif",
    repo_link: "https://github.com/coleman-buffa/Project-2",
    deployed_link: "https://party-x.herokuapp.com/",
    skills: ["MySQL", "Express.js", "Node.js", "Passport.js", "Sequelize"] 
  },
  {
    title: "BurritoZilla",
    description: "First full stack application solo build",
    image_link: "./images/burrito-time.gif",
    repo_link: "https://github.com/coleman-buffa/burrito-time",
    deployed_link: "https://burritozilla.herokuapp.com/",
    skills: ["MySQL", "Express.js", "Node.js", "Express Handlebars"]
  }
];

Projects.deleteMany({})
  .then(() => Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });