'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/generate',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.generateToken',
        ]
    },
];
