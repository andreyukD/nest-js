import { prop, index } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
  @prop()
  name: string;

  @prop()
  value: string;
}

export interface ProductModel extends Base {}

// @index({ title: 'text', seoText: 'text' }) // have to create indexes manually, in robo3t
/*
db.getCollection("TopPage").getIndexes()
db.TopPage.createIndex({title: "text", seoText: "text"})
db.getCollection("TopPage").dropIndex("title_text")
*/
export class ProductModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  title: string;

  @prop()
  price: number;

  @prop()
  oldPrice?: number;

  @prop()
  credit: number;

  // @prop()
  // calculatedRating: number;

  @prop()
  description: string;

  @prop()
  advantages: string;

  @prop()
  disAdvantages: string;

  @prop({ type: () => [String] })
  categories: string[];

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => [ProductCharacteristic], _id: false })
  characteristics: ProductCharacteristic[];
}
