import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ChampionsController {
    public getChampionsByName = async(req:Request, res:Response) => {
        const {name} = req.body
        try{

            const champion = await prisma.champion.findFirst(
                {
                    where: {
                        name: name       
                    }
                }
            )
            res.json(champion)

        }catch(error){

        }
    } 

    public createChampion = async(req:Request, res:Response) => {
        const {name, biography, release_date, sprites} = req.body
        try{
            await prisma.champion.create({data: {
                name: name,
                biography: biography,
                release_date: new Date(release_date),
                sprites: sprites
            }});
            res.json({message: "Champion created successful"})

        }catch(error){
            console.log(error)
            res.json({message: error})
        }
    
    }

    public updateChampion = async(req:Request, res:Response) => {
        throw new Error("Method updateChampion is not implemented")
    }

    public deleteChammpionByName = async(req:Request, res:Response) => {
        const {name} = req.body
        try{
            await prisma.champion.delete({
                where: {name: name}
            })
            res.json({message: "Champion deleted succesful"})
        }catch(error){
            console.log(error)
            res.json({message: "Error on deleted"})
        }
    }
}