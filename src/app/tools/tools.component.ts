import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent 
{
  public fnum!:number;
  public snum!:number;
  public ope!:string;
  public result!:number;

cal()
{
  if(this.ope == "+")
  {
    this.result = this.fnum+this.snum;
  }
  else if(this.ope == "-")
  {
    this.result = this.fnum-this.snum;
  }
  else if(this.ope == "*")
  {
    this.result = this.fnum*this.snum;
  }
  else if(this.ope == "/")
  {
    this.result = this.fnum/this.snum;
  }
  else
  {
     this.result = 0;
  }
}

}
