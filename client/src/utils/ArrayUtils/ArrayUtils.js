// Array utility functions


/**
 * Restructure a flat associative array into a nested one
 * based on an array key
 * Note: Currently assumes a depth of two
 * @todo Need to make this more portable
 * @param {arr} array of data
 * @param {str} parentKeyStr
 * @returns {arr} nested array
 */
export function shapeNestedArray( array, parentKeyStr )
{     
    if( !parentKeyStr ) return array;
    let o = new Array();

    for( let i = 0; i < array.length; i++ )
    {   
        let parentId = array[i][parentKeyStr]; 
        console.log( 'parentId', parentId );
        if( parentId )
        {   
            o[parentId]['children'].push( array[i] );
        }
        else
        {   
            o[array[i]['id']] = {
                name: array[i]['name'],
                id: array[i]['id'],
                children: []
            };
            
        }
    }
    return o;
} 