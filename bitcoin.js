const csv=require('csvtojson');
const fs=require('fs');

csv().fromFile('customer-data.xls')
    .then(users => {

      fs.writeFile('output.json', JSON.stringify(users, null, 4), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON array is saved.");
      });
    }).catch(err => {
        // log error if any
        console.log(err);
    });


