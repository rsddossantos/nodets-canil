import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import {createMenuObjects} from "../helpers/createMenuObjects";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);
    let data = {
        menu: createMenuObjects(''),
        list,
        query
    }

    res.render('pages/page', data);
}