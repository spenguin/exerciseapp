// Form utility functions

/**
 * Render a string of the select options from an array
 * @param {array} array of elements
 * @param {str} index key
 * @param {str} value key
 * @param {int} (optional) selected index
 * @returns {str} Options as a string
 */

export function renderOptions( array, index, value, selected=null ) 
{
    let o = [];
    let selString = '';
    array.map( a => { console.log( 'a', a[index] ); 
        if( selected )
        {
            selString = ( selected == a[index] ) ? ' selected' : '';
        }
        o.push( `<option value=${a[index]} ${selString}>${a[value]}</option>`)
    }); 
    return o;
}