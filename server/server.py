#!/usr/bin/env python
# this works in python 2.7 or 3+ with deps in requirements.txt

from flask import Flask, Response, jsonify
#from flask.ext.sqlalchemy import SQLAlchemy
#from flask.ext.restless import APIManager

app = Flask(__name__)


@app.route('/save', methods=['POST'])
def save(request):  # pragma: no cover
    out = open('test.html')
    out.write(request["page"])
    out.close()
    return Response("Saved!", mimetype="text/html")

#manager = APIManager(app, flask_sqlalchemy_db=db)

# Quick API endpoint created at /api/<tablename> by
#manager.create_api(Cruise, results_per_page=20,
                   #methods=['GET', 'POST', 'DELETE'])

# filters/order_by possible
# curl -G -H "Content-type: application/json" -d 'q={"filters":[{"name":"duration","op":"eq","val":"75"}]}'   http://127.0.0.1:8000/api/tablename

if __name__ == '__main__':
    app.run(port=8001, debug=True)
