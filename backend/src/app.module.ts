import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://mihaialex989:b0nkVGz1xqTdfsR7@cluster0.pfwfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Conexiune la MongoDB
    WorksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

