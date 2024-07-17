import * as graphql from "@nestjs/graphql";
import { SearchDto } from "../search/SearchDto";
import { SearchService } from "./search.service";

export class SearchResolver {
  constructor(protected readonly service: SearchService) {}

  @graphql.Query(() => [String])
  async SearchBooks(
    @graphql.Args()
    args: SearchDto
  ): Promise<string[]> {
    return this.service.SearchBooks(args);
  }
}
