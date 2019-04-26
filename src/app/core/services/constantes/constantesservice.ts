import {Injectable} from '@angular/core';
import {constantes} from './constantes';
import {environment} from '../../../../environments/environment';


@Injectable()
export class ConstantesService {
    getAPIRoute(key:string) {
        return environment.apiurl + constantes[key];
    }
}
