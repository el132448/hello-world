import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`
  <h2>Welcome {{name.toUpperCase()}}</h2>
  <h2>2+2={{2+2}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [disabled]="isDisabled" type="text" value="Name">

  <!-- Class binding -->
  <h2 [class]="successClass">text-success</h2>
  <h2 class="text-special" [class]="successClass">text-special</h2>
  <h2 [class.text-danger]="hasError">text-danger</h2>
  <h2 [ngClass]=messageClasses>messageClasses</h2>

  <!-- Style binding -->
  <h2 [style.color]="'orange'">Style Binding</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding2</h2>
  <h2 [style.color]="highlightColor">highlightColor</h2>
  <h2 [ngStyle]="titleStyles">titleStyles</h2>

  <!-- Event Binding -->
  <button (click)="onClick($event)">greeting</button>
  <button (click)="greeting='Greeting2'">greeting2</button>{{greeting}}
  <br>

  <!-- Template Reference Variables -->
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <button (click)="logMessage(myInput)">DOM</button>

  <!-- Two Way Binding -->
   <input [(ngModel)]="name_two_way_bind" type="text">
   {{name_two_way_bind}}

   <!-- Structural Directives -->
  <h2 *ngIf="true">Structural Directives ngIf</h2>

  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `]
})
export class TestComponent {
  // interpolation
  greetUser(){
    return "Hello " + this.name;
  }
  public name = "name2";
  public siteUrl = window.location.href;

  // attributes - HTML (cant change once initialized)
  // properties - DOM (can change dynamically)
  // $0.getAttribute('value')
  // $0.value
  // $0 means current element

  // disable="false" has no effect
  // thats why need property binding instead of interpolation
  public isDisabled = true;

  // Class binding
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  // Style binding
  public highlightColor = "blue";
  public titleStyles = {
    color: "purple",
    fontStyle: "italic"
  }

  // Event Binding
  public greeting = "";
  public onClick(event: any){
    console.log("Greeting!");
    console.log(event);
    this.greeting = "Greeting!" + event.type;
  }

  // Template Reference Variables
  logMessage(value: any){
    console.log(value);
  }

  // Two Way Binding
  public name_two_way_bind = "";

  // Structural Directives

}
