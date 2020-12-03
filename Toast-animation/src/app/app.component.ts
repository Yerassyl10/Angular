import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from './toast';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  public toastForm: FormGroup;
  constructor(private toastService: ToastService) { }
  public ngOnInit (): void {
      
    this.createMainForm();

}
  showToast() {
    this.toastService.show({
      title: this.toastForm.get('title').value,
      text: this.toastForm.get('text').value,
      isRed: this.toastForm.get('isRed').value,
      timeDuration: this.toastForm.get('timeDuration').value,
    });
  }

  
  private createMainForm (): void {
    this.toastForm = new FormGroup({
        title: new FormControl('Title'),
        text: new FormControl('Content'),
        timeDuration: new FormControl(3000),
        hasCloseButton: new FormControl(true),
        isRed: new FormControl(true),
    });
  } 
  
}
