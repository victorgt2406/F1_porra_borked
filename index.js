// Imports
const { Client } = require('@notionhq/client'); //Notion
require("dotenv").config(); //.env

// databases
const dbs = {
    scuderias: "c0eb0819e89641118504874ad76925c8",
    pilots: "cb5b7c29c1214ac18ef4b14eadddb0be",
    porras: "95c38d5c10be43298812784e6b5ce19c",
    carreras: "eb5b570656c64f84aaaf37e8f8d29975",
    chavales: "eecf9610ad7f4ff38f296e13281fe721",
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
    const databaseId = dbs.carreras;
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    console.log(JSON.stringify(response));
})();