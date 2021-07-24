import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';



export function nameNotAllowed(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
        const controlValue = control.value;
        const returnData = regex.test(controlValue);
        return returnData? {nameNotAllowed: {value: controlValue}}: null;
    }
}

export const valueRequired: ValidatorFn = (control:FormGroup): ValidationErrors | null => {

    const userName = control.get('userName').value;
    const password = control.get('password').value;

    return userName && password ?null :  {valueRequired: true};
}





