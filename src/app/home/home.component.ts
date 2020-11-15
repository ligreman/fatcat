import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPeso = null;
  myAltura = null;

  imcForm = new FormGroup({
    peso: new FormControl(this.myPeso, [
      Validators.required,
      Validators.min(1),
      Validators.max(500)
    ]),
    altura: new FormControl(this.myAltura, [
      Validators.required,
      Validators.min(1),
      Validators.max(250)
    ])
  });

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const param = this.calcIMC(this.imcForm.get('peso').value, this.imcForm.get('altura').value);
    this.router.navigate(['/results'], { queryParams: { id: param } });
  }

  calcIMC(p: number, a: number): number {
    console.log(p);
    console.log(a);
    // Paso la altura a metros
    a = a / 100;

    const imc = p / (a * a);
    let result;
    console.log(imc);
    if (imc < 25) {
      result = 0;
    } else if (imc >= 25 && imc < 30) {
      result = 1;
    } else if (imc >= 30 && imc < 35) {
      result = 2;
    } else if (imc >= 35 && imc < 40) {
      result = 3;
    } else {
      result = 4;
    }
    console.log(result);
    return result;
  }
}
