import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Computer } from 'src/app/shared/interfaces/computador';
import { CrudServicesService } from 'src/app/shared/services/crud-services.service';
import { ApiNodeService } from 'src/app/shared/services/api-node.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formulaic:FormGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    model:new FormControl(''),
    brand:new FormControl(''),
    description:new FormControl(''),
  });

  submitted:any = false;
  edit:any=false;
  add:any=true;
  id:any=''
  data:any=[];
  rest:any='';

  constructor(private formBuilder: FormBuilder, private crudService:CrudServicesService, private nodeApi:ApiNodeService){
    this.formulaic = this.formBuilder.group(
      {
        name:['', Validators.required],
        model:['', Validators.required],
        brand:['', Validators.required],
        description:['', Validators.required],

      }
    )


  }

  ngOnInit(): void {
    this.crudService.get().subscribe((res)=>{
      this.data=res;
      console.log(res)
    })
  }

  //Form
  get f(): { [key: string]: AbstractControl } {
    return this.formulaic.controls;
  }

  clean(){
    this.submitted = false;
    this.formulaic.reset();
  }


  async onSubmit() {
    this.submitted = true;
    if (this.formulaic.valid){
      console.log(this.formulaic.value);
      const response = await this.crudService.add(this.formulaic.value);
      console.log(response);
      this.clean()
    }else{
      
    }
    
  }

  async onClickDelete(data: Computer) {
    const response = await this.crudService.delete(data);
    console.log(response);
  }

  async onclickGetById(data: Computer){
    this.crudService.getId(data).subscribe((res:any)=>{
     this.id=res.id
     this.formulaic.get('name')?.setValue(res.name)
     this.formulaic.get('model')?.setValue(res.model)
     this.formulaic.get('brand')?.setValue(res.brand)
     this.formulaic.get('description')?.setValue(res.description)
    })
    this.edit=true;
    this.add=false;
  }

  onClickUpdate(){
    this.crudService.update(this.formulaic.value,this.id)
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      this.clean()
      this.edit=false;
      this.add=true;
    },1000);
  }

  sumaApi(){
    let data= {
      "numA": 52,
      "numB": 2
    }
    this.nodeApi.getRes(data).subscribe((res:any) =>{
      this.rest=res
    });
  }

}
