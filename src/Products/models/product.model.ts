import { Field, ObjectType, Float } from "@nestjs/graphql";



@ObjectType()
export class Product {
    @Field()
    name: string;

    @Field(type => Float)
    price: number;
}