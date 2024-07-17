import { Module } from "@nestjs/common";
import { SearchService } from "./search.service";
import { SearchController } from "./search.controller";
import { SearchResolver } from "./search.resolver";

@Module({
  controllers: [SearchController],
  providers: [SearchService, SearchResolver],
  exports: [SearchService],
})
export class SearchModule {}
