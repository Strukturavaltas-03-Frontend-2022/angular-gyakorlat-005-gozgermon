import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  /**
   * A kapott tömb rendezése a szűrőkifejezés alapján.
   * @param value {any[]} - a tömb.
   * @param key {string} - az objektum kulcs, ami alapján rendez.
   * @returns {any[]} - a kulcs alapján rendezett tömb.
   */
  transform(value: any[], key: string): any[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
   
    if (!Array.isArray(value) || !key) {
      return value
    }


    /**
     * FELADAT!
     * Térj vissza a value.sort metódus eredményével!
     * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
     * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusúra,
     *  azután alakítsd őket kisbetűssé.
     * 3. Térj vissza a két string localeCompare metódus által visszaadott
     *  összehasonlításának az eredményével.
     */
    return value.sort((a, b) => {
      if (typeof a[key]==='number' && typeof b[key]==='number'){
        return a[key]-b[key];
      }else{
        return String(a[key]).toLowerCase().localeCompare(String(b[key]).toLowerCase());
      }
    })



  }

}
