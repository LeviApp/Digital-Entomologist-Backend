
const express = require("express");
const morgan = require('morgan')

const server = express();

// Connect Mongo Database
const dbURI = "mongodb+srv://leviapp:<password>@digital-entomologist.9tmva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || '1111'

server.use(morgan("tiny"))
server.use(express.json());

server.get('/', (req, res) => {
    res.send("{ message: 'working so far' }");
  });

server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))

// db.solutions.insert({
//     id: 1,
//     user: {
//     author: "LeviApp"
//     },
//     tech: "Git",
//     title: "No Such File or Directory",
//     description: "Discover how to enter into a new directory or file.",
//     thumbnail: "TerminalPic",
//     headings: ["Step 1: View Contents of Current Directory", "Step 2: Write the Correct Name", "SUCCESS!"],
//     body: "Step 1: View Contents of Current Directory. Type 'ls' in the Terminal. View the contents of the folder you are currently in. Step 2: Write the Correct Name. Find the folder or file you are trying to enter. Pay attention to the spelling. Type cd (NAME OF FOLDER). SUCCESS!",
//     imgs: ["lsImg", "cdImg"],
//     vids: ["lsVid", "cdVid"],
//     likes: 4444,
//     views: 4444,
//     tags: ["Git", "Folder", "Directory", "List", "cd", "ls"],
//     date: Date()
//     })