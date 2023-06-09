import { Request, Response } from "express";
import {Pet} from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req:Request, res:Response) =>{
    let Pets = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        Pets
    })
}
export const dogs = (req:Request, res:Response) =>{
    let Pets = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        Pets
    })

}
export const cats = (req:Request, res:Response) =>{
    let Pets = Pet.getFromType('cat')
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false
        },
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        Pets
    })
}
export const fishes = (req:Request, res:Response) =>{
    let Pets = Pet.getFromType('fish')
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true
        },
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        Pets
    })
}