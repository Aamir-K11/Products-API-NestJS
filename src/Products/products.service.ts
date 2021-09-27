import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Product, ProductDocument} from './product.schema';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductsService{
    constructor(@InjectModel(Product.name) private productModel : Model<ProductDocument>){}

    //Creates a product in the database.
    async createProduct(createProductDto : CreateProductDto) : Promise<Product>
    {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    //Returns all the products in the database.
    async findAll() : Promise<Product[]>
    {
        return this.productModel.find().exec();
    }
}