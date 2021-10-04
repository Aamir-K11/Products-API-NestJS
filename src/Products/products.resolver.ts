import { Resolver, Args, Query} from "@nestjs/graphql";
import { GetProductArgs } from "./dto/args/get-product.args";
import { Product } from "./models/product.model";
import { ProductsService } from "./products.service";


@Resolver(of => Product)
export class ProductsResolver {
    constructor(
        private productsService : ProductsService
    ) {}

    @Query(returns => Product) 
        async getProduct(@Args() args : GetProductArgs) {
            return this.productsService.findOnebyId(args.productId);
        }
    

}