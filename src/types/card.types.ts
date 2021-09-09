export type TCardStatistics = {
    practiceCount: number;
    flipCount: number;
};

export type TCard = {
    uuid: string;
    creationDate: number;
    frontContent: string;
    backContent: string;
    statistics: TCardStatistics;
};
