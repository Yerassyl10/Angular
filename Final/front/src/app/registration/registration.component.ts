import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ProductModel} from '../models'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  product: ProductModel;
  myForm: FormGroup;
  constructor(  
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.myForm=this.fb.group({
    id: '',
    categoryId:'',
    name: '',
    price: '',
    description: '',
    image:'',
    sale: false,
    
    })
  }
  

  submit() {
    this.product={
      name: this.myForm.controls['name'].value,
      categoryId: this.myForm.controls['categoryId'].value,
      price: this.myForm.controls['price'].value,
      description: this.myForm.controls['description'].value,
      image: this.myForm.controls['image'].value,
      sale: this.myForm.controls['sale'].value,
      id: this.myForm.controls['id'].value}
      
    
      
      this.productService.postProduct(this.product).subscribe(
        res=>{
          this.product = res
        }
      )
    }

  
}
