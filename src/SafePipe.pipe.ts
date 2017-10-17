// https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562/2

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected _sanitizer: DomSanitizer) { }

  public transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // console.log('Transforming: ' + type);
    // console.log('Value: ' + value);

    switch (type) {
      case 'html':
        const safeValue = this._sanitizer.bypassSecurityTrustHtml(value);
        // console.log('Safe Value: ' + safeValue);
        return safeValue;
      case 'style':
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Unable to bypass security for invalid type: ${type}`);
    }
  }
}
