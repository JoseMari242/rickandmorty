// Generated by https://quicktype.io

export interface TopLevel {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    string;
}


export interface Characters {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}
