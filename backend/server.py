from flask import Flask, request, render_template, jsonify, make_response, after_this_request, redirect, url_for
import os
from flask_cors import CORS

#Lógica CRUD
from CRUD.crud import CRUD

app = Flask(__name__)

#Config del entorno
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
CORS(app)

# MySQL CONFIG
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '9498'
app.config['MYSQL_DB'] = 'pygroup'

crud = CRUD() #Aca inicializamos nuestro CRUD

app.config['SECRET_KEY'] = "#pass"

#Rutas CRUD
@app.route("/create", methods=["POST", "GET"])
def create():
    crud.create() #Create

@app.route("/read", methods=["GET"])
def read():
    crud.read() #Create

@app.route("/update", methods=["POST"])
def update():
    crud.update() #Create

@app.route("/delete", methods=["DELETE"])
def delete():
    crud.delete() #Create

if __name__ == '__main__':
    app.run(debug = True)