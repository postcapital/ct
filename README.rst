ct Context Drag and Drop Web Publisher
======================================

Built with the new more modular Foundation for sites 6 and AngularJS 1.4

A start to a powerful client-side web editor that implmenents best of breed
angular components in the most flexible and lightweight angular way
doing as much 'cms work' in one place - client side.

There is a client component and server component.  The server component
is simply a RESTful json api using nodejs which can easily be reimplmented in
something more robust.  The node server is there out of popularity and not
to deter scenesters but I don't believe it's the best server side technology
if you have the choice and realise the power of python so I am also writing
a python server component that will be the definitive implementation.

The client is pure html5/javascript and attempts to 
prepare all content client side including images.

RUNNING
-------

Designed for offline development/control.  Currently no content distribution
networks are used for web dependencies and development.  
The project generates a single css file using
gulp.  I decided not to merge javascript files as it was getting bloated but
if many dependencies are needed then javascript files could be merged in future.
Some of the major ones could be distributed by a cdn for online apps and performance.

for a read-only client demo open client/index.html in your browser.

for saving pages as well (server component):
$ npm install

$ node server/server.js

or 

$ python server/server.py   having installed dependencies in requirements.txt

Installing python dependencies
------------------------------

$ virtualenv -p python3 envdir  (also works in python 2.7)

Activate virtualenv:

$ source envdir/bin/activate

Install Flask and a few requirements
$ pip install -r requirements.txt

Develop ct further with css/gulp
--------------------------------

$ npm install

$ bower install

$ gulp start

watches and builds scss and serves dev server on http://localhost:8000



James Carter 2016
