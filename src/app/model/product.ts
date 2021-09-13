import { Category } from "./category";

export class Product{
    id!:number;
    category_id!:number;
    name!:string;
    price!:number;
    brand!:string;
    status!:number;
    added_on!:Date;
    category?:Category[];

    constructor(){}
}