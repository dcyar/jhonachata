const readline = require("readline");
const exec = require("child_process").execSync;
const fs = require("fs");

const textToSlug = (text) => {
  return encodeURI(
    text
      .replace(/Á/gi, "a")
      .replace(/É/gi, "e")
      .replace(/Í/gi, "i")
      .replace(/Ó/gi, "o")
      .replace(/Ú/gi, "u")
      .replace(/À/gi, "a")
      .replace(/È/gi, "e")
      .replace(/Ì/gi, "i")
      .replace(/Ò/gi, "o")
      .replace(/Ù/gi, "u")
      .replace(/ñ/gi, "n")
      .replace(/\?/gi, "")
      .replace(/¿/gi, "")
      .replace(/!/gi, "")
      .replace(/¡/gi, "")
      .replace(/ /g, "-")
      .toLowerCase()
      .substr(0, 39)
  );
};

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

console.info("Welcome to command line interface to creating new post!\n");

const postData = {};
let finish = false;

rl.question("Post title: ", (answer1) => {
  postData["title"] = answer1;
  finish = true;
  rl.close();
});

rl.on("close", () => {
  const now = new Date();
  const regexDigitsInDate = /([0-9]{2})/g;
  const DigitsInDate = now.toISOString().match(regexDigitsInDate);
  const slug = textToSlug(postData.title);

  postData[
    "fileName"
  ] = `${DigitsInDate[1]}${DigitsInDate[2]}${DigitsInDate[3]}-${slug}.md`;
  postData["date"] = now.toISOString().split('T')[0];

  try {
    fs.statSync(`src/content/posts`);
  } catch (err) {
    fs.mkdirSync(`src/content/posts`);
  }

  try {
    fs.statSync(`src/content/posts/${postData.fileName}`);
    console.error("\nError!: The post has already been created");
  } catch (err) {
    fs.writeFileSync(
      `src/content/posts/${postData.fileName}`,
      `---
type: original
title: '${postData.title}'
slug: '${slug}'
publishedAt: ${postData.date}
excerpt: ''
tags: []
---`
    );
    console.info(`\nSuccess!!: content/posts/${postData.fileName} was created`);
  }
});

rl.on("SIGINT", () => rl.pause());

rl.on("pause", () => {
  if (!finish) console.log("\nBye!\n");
});
