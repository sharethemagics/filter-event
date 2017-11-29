import { PipeTransform, Pipe } from '@angular/core';
import { ICar } from './car';

@Pipe({
    name: 'modelFilter'
})

export class ModelFilterPipe implements PipeTransform {
    transform(value: ICar[], filter: string): ICar[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        console.log( filter);
        return filter ? value.filter((product: ICar) =>
            product.carModel.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}