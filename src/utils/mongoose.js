const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud')
 .then(() => console.log('MongoDB conencted...'))
 .catch(err => console.log(err));