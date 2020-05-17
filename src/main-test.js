// ESM syntax is supported.
import converter from 'graphql-to-postman';
var fs = require('fs');
var path = require('path');
const yelpSDL = fs.readFileSync(path.join(__dirname, './yelp.graphql')).toString();
const validJSON = fs.readFileSync(path.join(__dirname, './valid.graphql')).toString();
const validSDL = fs.readFileSync(path.join(__dirname, './valid.graphql'));
const yelpJSON = fs.readFileSync(path.join(__dirname, './yelp.graphql')).toString();


const options = {includeDeprecatedFields:true,depth:3 }
// const x = converter.convert(json, options, console.log)
// const v = converter.convert(validSDL, options, console.log)

const yelp = () => converter.convert({ type: 'string',
data: yelpJSON
}, options, function (error, result) {
    if (error) {
        console.log("ERROR_____",error);
        return error;
    }
    const collection = result.output[0];
        const data = JSON.stringify(collection);
        // const content = JSON.stringify(output);
        console.log("SUCCESS! COLLECTION");
        console.log(JSON.stringify(collection, null, 2));
        fs.writeFile('yelp.collection.json', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

    return collection;
});
yelp()

