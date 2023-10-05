import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/Categoria';
import { SelectModel } from 'src/app/models/SelectModel';
import { SistemaFinanceiro } from 'src/app/models/SistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, 
    public sistemaService: SistemaService, public authService: AuthService,
    public categoriaService : CategoriaService) {
  }

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();



  categoriaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]],
          sistemaSelect: ['', Validators.required]
        }
      )

      this.ListaSistemasUsuario();
  }


  dadorForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    var dados = this.dadorForm();
    debugger
    let item = new Categoria();
    item.nome = dados["name"].value;
    item.id = 0;
    item.idSistema = parseInt(this.sistemaSelect.id);

    this.categoriaService.AdicionarCategoria(item)
      .subscribe((response: Categoria) => {

        this.categoriaForm.reset();

      }, (error) => console.error(error),
        () => { })
  }

  ListaSistemasUsuario() {
    this.sistemaService.ListaSistemasUsuario(this.authService.getEmailUser())
      .subscribe((reponse: Array<SistemaFinanceiro>) => {

        var lisSistemaFinanceiro = [];

        reponse.forEach(x => {
          var item = new SelectModel();
          item.id = x.id.toString();
          item.name = x.nome;

          lisSistemaFinanceiro.push(item);

        });

        this.listSistemas = lisSistemaFinanceiro;

      })
  }

}