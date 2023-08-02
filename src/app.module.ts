import { Module } from '@nestjs/common';

import { EducationalResourcesModule } from './educational_resources/educational_resources.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    EducationalResourcesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
