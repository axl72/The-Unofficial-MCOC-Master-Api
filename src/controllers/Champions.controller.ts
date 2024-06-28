import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Champion } from "../model";

const prisma = new PrismaClient();

export class ChampionsController {
  public getChampionsByName = async (req: Request, res: Response) => {
    const championName =  req.params.championName;

    try {
      const champion = await Champion.findChampionByName(championName);

      if(!champion) return res.json({message: "Champion not found"})

      res.json(champion);
    } catch (error) {}
  };

  public createChampion = async (req: Request, res: Response) => {
    try {
      Champion.create(req.body);
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
