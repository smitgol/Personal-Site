import test_img from "../images/crypto_hunter.jpg";
import spotify_page from "../images/spotify_page.png"
import stock_page from "../images/stock_page.png"
import twitch_page from "../images/twitch_page.png"
import lottery_page from "../images/lottery_page.png"

export const projectData = [
  {
    title: "Decentralized Lottery System",
    description: "This is decentralized lottery system where, user money will be not owned by one person or organization.But that balance will be store in smart contract.",
    stack: ["JavaScript","React.Js", "Next.JS", "Material UI", "Ether.JS"],
    github_link: "https://github.com/smitgol/Web3-lottery-app",
    website_link: "https://roaring-moxie-4a35e1.netlify.app/",
    img: lottery_page,

  },
  {
    title: "Crypto Hunter",
    description:
      "A website to see crypto currency prices and charts, also explore top trending crypto coins.",
    stack: ["JavaScript", "React.js", "Styled Component", "Chart.js"],
    github_link: "https://github.com/smitgol/react-crypto-tracker",
    website_link: "https://stirring-toffee-e190a3.netlify.app/",
    img: test_img,
  },
  {
    title: "Spotify Clone",
    description:
      "This project is clone of music player app Spotify.In this project user can login with their spotify account and and access their like playlist and also can play song.",
    stack: ["JavaScript", "React.js", "Python Django", "Django Rest Framework", "Spotify Api"],
    github_link: "https://github.com/smitgol/Spotify-Clone",
    img: spotify_page,
  },
  {
    title: "Stock Daily",
    description:
      "A website where you get closing price, open price, day high, day low, 52 week high 52 week low of your selected stock on your email address.",
    stack: ["JavaScript", "Python Django", "Cron Job", "NSE Api"],
    github_link: "https://github.com/smitgol/Stock-Daily",
    img: stock_page,
  },
  {
    title: "Twitch Clone",
    description:
      "This project is inspire from twitch.In this project we can do live stream by login with google login.And other user can see stream.We have also included CRUD operation functionality for stream in our website.",
    stack: ["JavaScript", "React.js", "RTMP server", "JSON server"],
    github_link: "https://github.com/smitgol/TwitchClone",
    img: twitch_page,
  },
];
