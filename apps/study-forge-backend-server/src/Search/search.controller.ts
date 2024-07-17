import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SearchService } from "./search.service";
import { SearchDto } from "../search/SearchDto";

@swagger.ApiTags("searches")
@common.Controller("searches")
export class SearchController {
  constructor(protected readonly service: SearchService) {}

  @common.Get("/search-books")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchBooks(
    @common.Body()
    body: SearchDto
  ): Promise<string[]> {
        return this.service.SearchBooks(body);
      }
}
