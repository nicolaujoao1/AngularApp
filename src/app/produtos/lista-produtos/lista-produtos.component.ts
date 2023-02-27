import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Produto } from 'src/app/services/produtos/produto';
import { ProdutoService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
})
export class ListaProdutosComponent implements OnInit{
  
  constructor(private produtoService:ProdutoService){}
  public produtos!:Array<Produto>;
  ngOnInit(){ 
// of(this.produtoService.obterProdutos()).subscribe({
//     next: (v) => console.log(v),
//     error: (e) => console.error(e),
//     complete: () => console.info('complete') 
// })
     this.produtoService.obterProdutos()
     .subscribe(produtos => {
        this.produtos = produtos;
         console.log(this.produtos);
      },
       error => console.log(error)
     );
  }

}
