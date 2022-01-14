// Helper functions


/**
 * Converts a title string to a slug, 
 * i.e. removes all non-alphanumeric characters
 * and replaces spaces with hyphens
 * @param {str} Text 
 * @returns {str}
 * https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
 */

function convertToSlug(Text) {
    return Text.toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
}


/**
 * Organises an array into a nested array
 * @param {arr} array
 * @param {str} index
 * @param {str} parent index
 * @returns {arr} array
 */
function nestArray( array, index, parent )
{
   return array;
   array.map( (element) => {
      // Still trying to figure this out. FIX
   });
}