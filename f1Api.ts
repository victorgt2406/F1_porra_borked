import axios from "axios"
import { DriversJson, RacesJson } from "./types/F1Api"

class F1Api{
    static async results(year:number, round:number){
        return (await axios.get(`https://ergast.com/api/f1/${year}/results/${round}.json`) as RacesJson).MRData.RaceTable.Races;
    }

    static async drivers(year: number){
        return (await axios.get(`https://ergast.com/api/f1/${year}/drivers`) as DriversJson).MRData.DriverTable.Drivers;
        
    }
}

export default F1Api;