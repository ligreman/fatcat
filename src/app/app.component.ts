import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService, public dialog: MatDialog) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }

  ngOnInit(): void {
  }

  openLicenses(): void {
    this.dialog.open(LicenseDialogComponent);
  }
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'license-dialog-content.html',
  styleUrls: ['./app.component.css']
})
export class LicenseDialogComponent {}
