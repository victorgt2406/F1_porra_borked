// races
interface RaceLocation {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

interface RaceCircuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: RaceLocation;
}

interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: RaceCircuit;
    date: string;
    time: string;
}

interface RaceTable {
    season: string;
    Races: Race[];
}

interface RacesMRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: RaceTable;
}

interface RacesJson {
    MRData: RacesMRData;
}
// Drivers
interface Driver {
    driverId: string;
    permanentNumber?: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

interface DriverTable {
    season: string;
    Drivers: Driver[];
}

interface DriversMRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: DriverTable;
}

interface DriversJson {
    MRData: DriversMRData;
}

interface CircuitLocation {
    lat: string;
    long: string;
    locality: string;
    country: string;
}
export type { RacesJson, Race, DriversJson, Driver }