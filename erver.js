require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TOKEN) {
  console.log("Faltou TELEGRAM_BOT_TOKEN");
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start|start/i, (msg) => {
  const chatId = msg.chat.id;
  const text = `
Bem-vindo(a)!

Escolha
