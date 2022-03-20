import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoLocalStorage: string[] | null = []

  ngOnInit(): void {
    this.recuperarDadosDoLocalStorage()
  }

  salvarNoLocalStorage(valor: string): void {
    this.dadoLocalStorage?.push(valor)
    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
  /*  localStorage.setItem('dado', valor)
    this.dadoLocalStorage = valor*/
  }


  recuperarDadosDoLocalStorage(): void{
    let storage = localStorage.getItem('dado')
    let arr = JSON.parse(storage || '[]')
    this.dadoLocalStorage = arr
  }
  deletarDoLocalStorage(index: number): void{
    this.dadoLocalStorage?.splice(index, 1)

    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
    
  }
}
