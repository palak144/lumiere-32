import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  
  arrayOfStringsToArrayOfObjects(arr: any[]) {
    const newArray = [];
    arr.forEach(element => {
      newArray.push({
        label: element,
        value: element
      });
    });
    return newArray;
  }

  arrayOfObjectToArrayOfStrings(obj: any[]) {
    const newArray = [];
    obj.forEach(element => {
      newArray.push(element['value']);
    });
    return newArray;
  }
}
