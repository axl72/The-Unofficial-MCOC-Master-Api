import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { Champion } from "../model";

const prisma = new PrismaClient();

export class ChampionsController {
  public getChampionsByName = async (req: Request, res: Response) => {
    const championName = req.params.championName;

    try {
      const champion = await Champion.findChampionByName(championName);

      if (!champion) return res.json({ message: "Champion not found" });

      res.json(champion);
    } catch (error) {}
  };

  public createChampion = async (req: Request, res: Response) => {
    try {
      await Champion.create(req.body);
      res.json({ message: "Champion created successful" });
    } catch (error) {
      let errorMessage;
      if (error instanceof Prisma.PrismaClientValidationError) {
        errorMessage = "La entrada es inválida. Por favor, revisa los datos que enviaste.";
      } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Manejo de errores conocidos de Prisma
        if (error.code === "P2002") {
          errorMessage = "Ya existe un campeón con ese identificador único.";
        } else {
          errorMessage =
          "Ocurrió un error conocido. Por favor, revisa los datos.";
        }
      } else {
        errorMessage =
        "Ocurrió un error inesperado. Intenta nuevamente más tarde.";
      }
      res.json({ message: errorMessage });
    }
  };

  public updateChampion = async (req: Request, res: Response) => {
    const championName = req.params.championName;

    try {
      const champion = await Champion.findChampionByName(championName);
      if (!champion) return res.json({ message: "Champion not found" });

      await Champion.updateChampionByName(championName, req.body);
      res.json({ message: "Champion updated sucdessfully" });
    } catch (error) {
      console.log(error);
      res.json({ meesage: "Something was wrong" });
    }
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
