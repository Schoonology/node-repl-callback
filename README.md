# node-repl-callback

A really handy callback to use from the REPL console, _and only from the REPL console_. There is _no reason_ to use this callback within the logic of an application.

## Installation

`npm install repl-callback`

## Usage

Quick and simple usage example:

    node
    > callback = require('repl-callback')
    { [Function: callback] generate: [Function: generate] }
    > fs = require('fs')
    ...
    > fs.readFile('somefile', callback.bind(a = {}))
    undefined
    > Done.
    > a
    { ... }
    > fs.readFile('somefile', callback.bind(b = { message: 'Different completion message!' }))
    undefined
    > Different completion message!
    > b
    { ... }
    > c = callback.generate()
    [Function: callback]
    > fs.readFile('somefile', c)
    undefined
    > Done.
    > c
    { ... }
    > d = callback.generate()
    [Function: callback]
    > d.message = 'Different completion message!'
    'Different completion message!'
    > fs.readFile('somefile', d)
    undefined
    > d
    { ... }
