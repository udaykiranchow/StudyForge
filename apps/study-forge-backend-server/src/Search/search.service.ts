import { Injectable } from "@nestjs/common";
import { SearchDto } from "../search/SearchDto";

@Injectable()
export class SearchService {
  constructor() {}
  async SearchBooks(args: SearchDto): Promise<string[]> {
    throw new Error("Not implemented");
  }
}
