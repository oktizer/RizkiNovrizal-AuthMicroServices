'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/tracksite',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'TrackSiteInterface.checkSiteStatus',
            'TrackSiteInterface.insertURLSite',
            'TrackSiteInterface.getListURLSite'
        ]
    },
];
