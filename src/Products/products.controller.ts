import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';

@Controller("Products")
export class ProductsController {

    constructor(private productService : ProductsService) {}

    @Post()
    async createProduct(@Body() createProductDto : CreateProductDto ) {
        this.productService.createProduct(createProductDto);
    }

    @Get()
    async findAll() : Promise<Product[]> {
       return this.productService.findAll();
    }

    
}