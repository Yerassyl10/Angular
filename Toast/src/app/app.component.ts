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
      hasCloseButton: this.toastForm.get('hasCloseButton').value,
      showTitle: this.toastForm.get('showTitle').value,
      timeDuration: this.toastForm.get('timeDuration').value,
      horizontal: this.toastForm.get('horizontal').value,
      vertical: this.toastForm.get('vertical').value,
    });

   
  }
  private createMainForm (): void {
    this.toastForm = new FormGroup({
        title: new FormControl('Title'),
        text: new FormControl('Content'),
        timeDuration: new FormControl(3000),
        hasCloseButton: new FormControl(true),
        showTitle: new FormControl(true),
        isRed: new FormControl(false),
        vertical: new FormControl(0),
        horizontal: new FormControl(0),
    });
  }
}
