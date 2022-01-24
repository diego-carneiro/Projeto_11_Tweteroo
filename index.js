import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (request, response) => {
    
    const user = request.body;
    users.push(user);
    response.send("OK");
});

server.get("/tweets" , (response)=> {
    
    const lastTweets = tweets.slice(0-10);
    response.send(lastTweets);
});

server.post("/tweets", (request, response) => {
    const tweet = request.body;
    const currentUser = users.find(user => user.username === tweet.username);
    const tweetWithAvatar = {...tweet, avatar: currentUser.avatar};
    tweets.push(tweetWithAvatar);
    response.send("OK");
})

server.listen(5000);