import { PipeTransform, Pipe } from '@angular/core';
import { ICar } from './car';

@Pipe({
    name: 'makeFilter'
})

export class MakeFilterPipe implements PipeTransform {
    transform(value: ICar[], filter: string): ICar[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        console.log(filter);
        console.log(value);
        console.log(  filter ? value.filter((product: ICar) =>
        product.carMake.toLocaleLowerCase().indexOf(filter) !== -1) : value);
        return filter ? value.filter((product: ICar) =>
            product.carMake.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
