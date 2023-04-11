// Imports
import { Client } from '@notionhq/client'; //Notion

// databases
type Dbs = {
    scuderias: string;
    drivers: string;
    porras: string;
    results: string;
    chavales: string;
}
const dbs:Dbs = {
    scuderias: "c0eb0819e89641118504874ad76925c8",
    drivers: "cb5b7c29c1214ac18ef4b14eadddb0be",
    porras: "95c38d5c10be43298812784e6b5ce19c",
    results: "eb5b570656c64f84aaaf37e8f8d29975",
    chavales: "eecf9610ad7f4ff38f296e13281fe721",
};





class NotionApi{
    notion: Client;
    constructor() {
        this.notion = new Client({ auth: process.env.NOTION_API_KEY });
    }

    private getQuery(dbname: keyof Dbs){
        return (async () => {
            const databaseId = dbs[dbname];
            const response = await this.notion.databases.query({
                database_id: databaseId,
            });
            console.log(JSON.stringify(response));
            const results = response.results;
            return results;
        })();
    }

    getDrivers(){
        return this.getQuery("drivers");
    }

    getPorras(){
        return this.getQuery("porras");
    }

    getResults(){
        return this.getQuery("results");
    }

    getScuderias(){
        return this.getQuery("scuderias");
    }

    getChavales(){
        return this.getQuery("chavales");
    }
    
}

export default NotionApi;