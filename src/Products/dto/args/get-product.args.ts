import { ArgsType, Field } from "@nestjs/graphql";



@ArgsType()
export class GetProductArgs {

    @Field()
    productId : string;

}