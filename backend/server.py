from flask import Flask, request, render_template, jsonify, make_response, after_this_request, redirect, url_for
import os
from flask_cors import CORS

app = Flask(__name__)

#Config del entorno
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
CORS(app)


#Rutas CRUD
@app.route("/create", methods=["POST", "GET"])
def create():
    pass

@app.route("/read", methods=["GET"])
def read():
    pass

@app.route("/update", methods=["POST"])
def update():
    pass

@app.route("/delete", methods=["DELETE"])
def delete():
    pass

if __name__ == '__main__':
    app.run(debug = True)