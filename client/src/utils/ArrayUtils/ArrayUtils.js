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
    let o = [];

    for( let i = 0; i < array.length; i++ )
    {   
        let parentId = array[i][parentKeyStr]; 
        
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

/**
 * A second sorting function - because one isn't enough, apparently
 */
export function organiseExercises( array )
{
    let o = [];
    o[2] = {name:'Goal', 'children': []};
    o[3] = {name:'Builder', 'children': []};
    o[4] = {name:'Warmup', 'children': []};

    for( let i = 0; i < array.length; i++ )
    {   
        o[array[i]['mId']]['children'][i] = array[i]; 
    }

    return o;
}