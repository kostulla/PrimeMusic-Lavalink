

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["818522663207043122", "1011961543266664498"], 
  mongodbUri : "mongodb+srv://kosths:8ua7DuvQjFO4EluW@light.5cvo4.mongodb.net/",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Energy Project", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/jfBKVh2trM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "Energy Project",
      password: "prplmoe.me",
      host: "lavav4.prplmoe.me",
      port: 1118,
      secure: false
    },
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
