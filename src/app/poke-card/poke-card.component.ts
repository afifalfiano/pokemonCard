import { PokeAPIService } from './../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  page: number = 1;
  dataPokemon: Array<any> = [];
  namePokemon: Array<any> = [];
  urlPokemon: Array<any> = [];
  specificPokemon: any;
  urlAvatar: string;
  detailPokemon: Array<any> = [];

  constructor(
    private pokeSvc: PokeAPIService,
  ) {
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeSvc.getDataPoke().subscribe(
      (response) => {
        const data: Array<any> = response.results;
        this.dataPokemon = data;
        this.dataPokemon.forEach((item: any, index: number) => {
          this.pokeSvc.getEachPokemon(item.url).subscribe(
            (resp) => {
              item.url = resp.id;
              this.detailPokemon = item;
              item.urlAvatar = 'https://pokeres.bastionbot.org/images/pokemon/' + item.url + '.png';
              if (resp.types.length < 2) {
                const datas = resp.types[0].type.name;
                item.tipePokemon = this.capitalize(datas);
              } else {
                const datas0 = resp.types[0].type.name;
                const datas1 = resp.types[1].type.name;
                item.tipePokemon = this.capitalize(datas0) + ' - ' + this.capitalize(datas1);
              }
              item.species = this.capitalize(resp.species.name);
              item.weight = resp.height;
              item.height = resp.weight;
              item.rank = resp.order;
            }
            );
          });
      }
    );
  }

  private capitalize(word) {
    const capital = word.toLowerCase().replace(/\b./g, (first) => {
      return first.toUpperCase();
    });
    const changeSymbol = capital.replace('Dan', 'dan');
    return changeSymbol.replace('&', 'dan');
  }

}
