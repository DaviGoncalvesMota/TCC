const mongoose = require('mongoose')
function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi,
        function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        });
}


const uri = 'mongodb+srv://davigmota:4RhkS1KORbUksqPG@achados-perdidos.0zego7i.mongodb.net/?retryWrites=true&w=majority&appName=achados-perdidos'

try {
    mongoose.connect(unicodeToChar(uri), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
        console.log("connected"));
} catch (error) {
    console.log("could not connect", error.message);
}

mongoose.Promise = global.Promise

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected!');
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected!');
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose Error!', err.message);
});

module.exports = mongoose.connection;