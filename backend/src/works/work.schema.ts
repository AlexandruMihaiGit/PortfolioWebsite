import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkDocument = Work & Document;

@Schema()
export class Work {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  imageUrls: string[];

  @Prop()
  clientLink: string;

  @Prop({ default: 'visible' })
  status: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);