import { Request, Response } from "express";

export class ChampionsController {
    public getChampionsByName = (req:Request, res:Response) => {
        const championInformation = {
            name: "Hercules",
            inmunities: [],
            description: "Hercules is best mcoc champion"
        }
        res.json(championInformation)

    } 
}