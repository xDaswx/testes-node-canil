import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request, res:Response) =>{
    let param: string = req.query.q as string;
    let Pets =  Pet.getFromName(param)
    res.render('pages/page',{
        menu: createMenuObject(''),
        Pets,
        param
    })

}