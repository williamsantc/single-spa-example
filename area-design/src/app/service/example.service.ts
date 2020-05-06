import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ExampleService {

  constructor(private readonly httpClient: HttpClient) {
  }
  public doFetch() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto/')
  }

}
