import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2UVhhQlVFfV5dX2VWfFN0QXNfdVp4flVAcDwsT3RfQF5iS3xUd01mXHxadHBWRw==");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
