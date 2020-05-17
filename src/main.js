// ESM syntax is supported.
import converter from 'graphql-to-postman';
var fs = require('fs');
var path = require('path');
const yelpGQL = fs.readFileSync(path.join(__dirname, './yelp.graphql'));
const swapiGQL = fs.readFileSync(path.join(__dirname, './swapi.graphql'));
const yelpJSON = yelpGQL.toString();
const swapiJSON = swapiGQL.toString();
console.log(swapiJSON)
const options = {includeDeprecatedFields:true,depth:3 }

const yelpCollection = () => converter.convert({ type: 'string',
data: yelpJSON
}, options, function (error, result) {
    if (error) {
        console.log("ERROR_____",error);
        return error;
    }
    const output = result.output[0];
        const data = JSON.stringify(output);
        console.log("SUCCESS! COLLECTION");
        // console.log(JSON.stringify(collection, null, 2));
        fs.writeFile('yelp.collection.json', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

    return output;
});
yelpCollection();

const swapiCollection = () =>
    converter.convert({
        type: 'string',
data: swapiJSON
}, options, function (error, result) {
    if (error) {
        console.log("ERROR_____",error);
        return error;
    }
    console.log("RESULT_____",result);
    const output = result.output[0];
        const data = JSON.stringify(output);
        console.log("SUCCESS! COLLECTION");
        // console.log(JSON.stringify(collection, null, 2));
        fs.writeFile('swapi.collection.json', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

    return output;
});
swapiCollection();
// const swapi = collection(yelpJSON,'yelp.collection.json');

