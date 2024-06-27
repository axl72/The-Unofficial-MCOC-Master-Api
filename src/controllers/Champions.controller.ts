import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ChampionDTO } from "../model/champion.dto";

const prisma = new PrismaClient();

interface Champion {
  name: string;
}

interface Bonus {
  description: string;
}

interface Synergy {
  name: string;
  champions: Champion[];
  bonuses: Bonus[];
}

export class ChampionsController {
  public getChampionsByName = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const champion = await ChampionDTO.findChampionByName(name);
      res.json(champion);
    } catch (error) {}
  };

  public createChampion = async (req: Request, res: Response) => {
    try {
      ChampionDTO.create(req.body);
      res.json({ message: "Champion created successful" });
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  };

  public updateChampion = async (req: Request, res: Response) => {
    throw new Error("Method updateChampion is not implemented");
  };

  public deleteChammpionByName = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      await prisma.champion.delete({
        where: { name: name },
      });
      res.json({ message: "Champion deleted succesful" });
    } catch (error) {
      console.log(error);
      res.json({ message: "Error on deleted" });
    }
  };
}
