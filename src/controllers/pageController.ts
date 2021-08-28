import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObjects } from '../helpers/createMenuObjects';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    let data = {
        menu: createMenuObjects('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    }

    res.render('pages/page', data);
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    let data = {
        menu: createMenuObjects('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    }

    res.render('pages/page', data);
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    let data = {
        menu: createMenuObjects('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    }

    res.render('pages/page', data);
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    let data = {
        menu: createMenuObjects('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    }

    res.render('pages/page', data);
}