import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {
    // whitespace validatioin
    static notOnlyWhitespace(contrl: FormControl) : ValidationErrors{
        
        // check if string only contains whitespace
        if((contrl.value !=null)&& (contrl.value.trim().length ===0)){

            // invalid, return error object
            return {'notOnlyWhiteSpace' : true};
        }

        else 
        {
            return null;
        }
    }
}
