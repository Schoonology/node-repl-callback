// 
// REPL-Callback
// 
// A really handy callback to use from the REPL console.
// 
// (C) 2012 Michael Schoonmaker
// 
function callback(err, data) {
    this.err = err;
    this.data = data;
    this.rest = [].slice.apply(arguments).slice(2);
    console.log(this.message || 'Done.');
}

function generate() {
    return function callback(err, data) {
        callback.err = err;
        callback.data = data;
        callback.rest = [].slice.apply(arguments).slice(2);
        console.log(callback.message || 'Done.');
    };
}

callback.generate = generate;

module.exports = callback;
