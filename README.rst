ct Context Drag and Drop Web Publisher
======================================

Built with the new more modular Foundation for sites 6 and AngularJS 1.4

A start to a powerful client-side web editor.
There is a client component and server component.  The server component
is simply a sample REST api using nodejs which can easily be reimplmented in
something more robust.  The client is pure html5/javascript and attempts to 
prepare all content client side including images.

RUNNING
-------

Designed for offline development so currently no Content Distribution
networks are used for web dependencies.  The project generates a single css file using
gulp.  I decided not to merge javascript files as it was getting bloated.

without installing dev dependencies or production:

$ node server/server.js

or to develop/extend:

$ npm install

$ bower install

$ gulp start

watches and builds scss and serves dev server on http://localhost:8000



