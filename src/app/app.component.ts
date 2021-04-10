import { Component, OnInit } from '@angular/core';
import { CrudService } from './shared/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'demoTest';
  num: any = null;
  select: any = 'isPrime';
  list: Array<String> = ['isPrime', 'isFibonacci'];

  categories: any;
  filterTerm: any = '';

  constructor(public crudService: CrudService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.crudService.getCategories().subscribe(res => this.categories = res);
  }

  search(event: any) {
    this.filterTerm = event?.target?.value;
  }

  numValue(event: any) {
    this.num = (event?.target?.value < 0) ? 1 : Math.ceil(event?.target?.value);
  }

  selectChange(event: any) {
    this.select = event?.target?.value;
  }

  isPrime(num: number) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  isFibonacci(num: number, count: number = 1, last: number = 0): boolean {
    if (count < num) {
      return this.isFibonacci(num, count + last, count);
    }
    return count === num;
  }

  isPrimeOrFibonacci(num: number, select: string) {
    return select === 'isPrime' ? this.isPrime(num) : this.isFibonacci(num);
  }

}
