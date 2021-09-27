import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product
{

    @Prop({required: true})
    name : string;

    @Prop({required: true, validate: p => p > 0 })
    price : number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);