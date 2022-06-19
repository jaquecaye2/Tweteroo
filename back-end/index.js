import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (request, response) => {
  const user = request.body;
  users.push(user);
  response.send("OK");
});

app.post("/tweets", (request, response) => {
  const tweet = request.body;

  let tweetAvatar = {}

  for (let i = 0; i < users.length; i++){
    if (tweet.username === users[i].username){
      tweetAvatar = {
        username: tweet.username,
        avatar: users[i].avatar,
        tweet: tweet.tweet
      }
    }
  }

  tweets.push(tweetAvatar);
  response.send("OK");
});

app.get("/tweets", (request, response) => {
  response.send(tweets.slice(-10));
});

app.listen(5000);
