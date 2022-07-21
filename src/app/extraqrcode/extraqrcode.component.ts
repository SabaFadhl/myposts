import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-extraqrcode',
  templateUrl: './extraqrcode.component.html',
  styleUrls: ['./extraqrcode.component.css']
})
export class ExtraqrcodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'app';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value= 'www.saba.com';

}
