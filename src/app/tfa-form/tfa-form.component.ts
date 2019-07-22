import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import { formStatics } from './formStatics';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tfa-form',
  templateUrl: './tfa-form.component.html',
  styleUrls: ['./tfa-form.component.css']
})
export class TfaFormComponent implements OnInit {
  formstats = formStatics;
  oProducts :any;
  oDataURL ="/V2/Northwind/Northwind.svc/Products?$format=json";
  tfaForm = new FormGroup({
  asesstype : new FormControl(''),
  fcompname : new FormControl('',[
  Validators.required,
  Validators.minLength(4)
  ]),
  fsiteaddr1 : new FormControl(''),
  fsiteaddr2 : new FormControl(''),
  city : new FormControl(''),
  state : new FormControl(''),
  country : new FormControl(''),
  prodname : new FormControl(''),
  onsitsalut : new FormControl(''),
  onsitfname : new FormControl(''),
  onsitlname : new FormControl(''),
  onsitemail : new FormControl(''),
  onsitphn: new FormControl(''),
  prefdat1 : new FormControl(''),
  prefdat2 : new FormControl(''),
  submit : new FormControl('')

  });
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.getRestItems();
  }

   get f() { return this.tfaForm.controls; }

 getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.oProducts = restItems;
          console.log(this.oProducts);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
  console.log("here");
    return this.http
      .get<any[]>(this.oDataURL)
      .pipe(map(data => data));
  }
}
