//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "slccimma@gmail.com";
global.location = "jaela,sri lanka.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94714110690@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/jaela";
global.github = process.env.GITHUB || "";
global.gurl =
  process.env.GURL || "";
global.website =
  process.env.GURL || "";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94714110690";
global.sudo = process.env.SUDO || "94714110690";
global.owner = process.env.OWNER_NUMBER || "94714110690";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9iV25RYm9oRnVIakxJeW9iNTFENHM5U1U5Q1dJc2w3bnFDbjJSNFYxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXJZRW5oY1NOT002MFM1NjcvWXZNRzNTeFpIUStzbTJpcGZXR0J2RXJFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRnh4bU4yYXgzd3ZLMk5FakdEcEhpN1FuYXE3T1NNVlExTThxYnlFcUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoRk9jVTlPQ25ZcFRFaU5FM2MxbW5NNHRwajJzYkM4YjV6c1NPQUF3TkhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PdUk4VEZqS25jVFlYR1NpTmRQeCsvbXZTMjRUUzFiRUF4NEpwdFVKRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVmN1VYbW84M3JXeEtsN0J0UVllSmluRXFjZUJIUm5ITXVzcUlZUzNIRUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFReG9wSDFudWJFUTQzT2dVMUpmMVdiYlZsbCtCU0Q0bVRNUWNUWHBuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVhQM1ViSC93K0FTcnowVEJnY25KdDdPc1B3TkZ2d3hUdldNTzNzYWlDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKaUpnVDQxOHlJcHladThLT0pQNE1SbkRqdUR3Y0c5RHk3bGswUjZGemxycDVQV2VwT2l5NDlzTUVtOUxxSU9FWEtncXlmREJFNUdTalFRVUVBQkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJFQ3FrdVo3MXBLOU1JTkhLRG85UlVGYklMS0htdDJ2ZXdWY0pXMVpFd1BrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5MjEyNDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkyRTVBMTZGRDYxOUFDNTdBMzUzMEI1NzkzMEVGNTM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg1NjA2NjV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5MjEyNDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkxNzAxQjhCMkVFMTE3QTE5MzVFOTdENzNBREQ0OThBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg1NjA2NjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVHeTluQUFBUTdDcFRvbVpzcnFKd0EiLCJwaG9uZUlkIjoiZWU0MjkwMDctY2RkZC00ZmJlLWExYzAtMWRlMDQyNTBiY2IzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOSFMrUXVnUlNQYU5hdDN4MzljZGFYTHJiMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpNEw2aFFBMEpBcTMvbTFKMmV5WG9udWp3NEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVdLWFRYQ1giLCJtZSI6eyJpZCI6Ijk0Nzc5MjEyNDI4OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWW9vb3cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01YbGg1NEdFSW44bnJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndLTGRYb0dtaHFSMmlCT05rWmhrWm50djVQZnZ0T0MwUVF5Y0pZTDRiVlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inp5TWZ2VEtlNjBRSHBQZDV3a0wvUlBHQWtEY1d2VktXYnlQa2gybmN0ekFHNUlxSER6ZUhFaU9YdW40VWprc2hFVzlpNndLck0yR2pnc1VYTFFCVUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0d3FtaWJJbS9Wd0xOUTE2VHB5ZUxVUU5WelBia2p3ckNOT04yQWE2OXlYN0VpRHFtOFNXWC9LaFVQQUdteTc0R2hGaEQ0a0NVWGtMWVNOOFpLalVCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc5MjEyNDI4OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0NpM1Y2QnBvYWtkb2dUalpHWVpHWjdiK1QzNzdUZ3RFRU1uQ1dDK0cxVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODU2MDY2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCd20ifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-IMMA😍",
  author: process.env.PACK_AUTHER || "IMMA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "IMMA",
  ownername: process.env.OWNER_NAME || "IMMA",
  errorChat: process.env.ERROR_CHAT || "94714110690",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
