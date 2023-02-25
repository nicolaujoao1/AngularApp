import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{
    protected UrlServiceV1:string="http://localhost:3000/";
    constructor(private http:HttpClient){

    }
    obterProduto(id:number):Observable<Produto>{
        return this.http.get<Produto>(`${this.UrlServiceV1}produto/${id}`)
    }   
    obterProdutos():Observable<Array<Produto>>{
        return this.http.get<Array<Produto>>(`${this.UrlServiceV1}produtos`)
    }
}