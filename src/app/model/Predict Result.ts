
export class Data {
    groundAvgByVenueType: number;
    oppositionConceedingAvgByVenueType: number;
    teamAvgByVenueTypeAndOpposition: number;
    teamAvgByYear: number;
    teamAvgByYearAndVenueType: number;
    venueType: string;
}

export class Params {
    Year: string;
    bat: string;
    bowl: string;
    groundId: string;
    score_10: string;
    score_15: string;
    score_20: string;
    score_25: string;
    score_30: string;
    wickets_10: string;
    wickets_15: string;
    wickets_20: string;
    wickets_25: string;
    wickets_30: string;
    wickets_5: string;
}

export class Prediction {
    dlPrediction: number;
    score: number;
    wickets: number;
}

export class PredictionResult {
    data: Data;
    params: Params;
    prediction: Prediction;
}


