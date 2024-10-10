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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0U1ZlYrWkZRWDVSSjkxOHdoZkxyV2NLdUQ5c1lNd1NPVGJuckhBeGNWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RXVkRvc2VDZ3g0Z0prWWxYNDU4Z3M4RkhIdWR5OGUwT3hZNTROVmlpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ29vbEJTVVhiclBSQkFMSEhlbEdNQjhOOW1nVjUwa2cxY2psWkp1MTJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHd21sOWdMUEZ5VmZmbDlmUytwY3drc2FhNldFWkZFdTk5U3hDelpnekJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDQldaUHRGajFYWERBallmVHhQbVg1QUlsblpxK01CeFNudksxUXlvR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNzK1FjMGpzbTNGdkpDSCtTSXg5QjRYS1VIb0U5VTFvMnkwcjVzQXNobW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUR5K3d2WEtYNDJjS2FqWXhVZDF1SzVPS3VLK01MbzBqSng3UE10c2luTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1owTWUyVDlGZGFXY1VzMWp1UWRZMjI0d2FDQ3Q2SmxaT1E1UytLcTBYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVnQzRVUkxsSUNHdkRORk1EeHErUEdadDZjNUpsZ0VRWEJmMi9GT0VrZUxJek1xZ0w1a2hYbDd1ODBPazlSZFJnQ2hER3lBZXBzcU1HK2FDMEZpZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiIvNk55ZjlKZzFxNDZjc1BxdTlSUnIyalF1QVdKY0FLUWtUdm9CdXcrcVkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCTUkxUkN5bFR0LUxJSVJqVk1pVHh3IiwicGhvbmVJZCI6IjBhNWQ0NjhhLWExNDktNGQyNC1iNzRhLWU2MDJlN2M1NGE3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVTVVUFJmdVllaG4wc3J4V0NmZDdTOFJUeVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RXMzhIOUwzRjJvUk53VEUzNW1xSncvMW5RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNCQVBWQkhMIiwibWUiOnsiaWQiOiI5NDc3OTIxMjQyODoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJZb29vdyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJsaDU0R0VJbUhuN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0tMZFhvR21ocVIyaUJPTmtaaGtabnR2NVBmdnRPQzBRUXljSllMNGJWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidng2TStHdWxxM3FiZllJNTZjWXkwRU12TVlZMnExbFlwTStaTUJ0cy95YVowVUdIZW00NTZJcitsc1l2VU9HU0FscDUxZWlqcEVHTG45U0dIS3V2REE9PSIsImRldmljZVNpZ25hdHVyZSI6Ind5OTEzZUVnUlp0Z1NEQzFHVFJheFExK3BzT3hhbGNtVTZCamJWWW5lN2RRTkNGaWlybG5kL1NDV3hqQStLelNjRXRhQkRrK1FNY1JCcWdlUmovRURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzkyMTI0Mjg6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0NpM1Y2QnBvYWtkb2dUalpHWVpHWjdiK1QzNzdUZ3RFRU1uQ1dDK0cxVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODU2MjA2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCd2sifQ==";
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
