from io import BytesIO
from flask import Flask, request, render_template, jsonify, make_response, after_this_request, redirect, url_for, send_file
import os
from flask_cors import CORS
from PIL import ImageFile, Image
from numpy import expand_dims
from werkzeug.utils import secure_filename
import base64

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
    if request.method == "POST":
        if request.files: #En request.files van las imagenes
            image = request.files['file']
        if request.form: #En request.form van los strings
            name = request.form['name']
            link = request.form['link']
        crud.create(name, link, image) #Create
        res = make_response(jsonify({"results": 'ok'}), 200)
        return res
    

@app.route("/read", methods=["GET"])
def read():
    data = crud.read()
    if data:
        res = []
        for x in data:
            res_data = {}
            res_data['id'] = x[0]
            res_data['name'] = x[1]
            res_data['link'] = x[2]
            res_data['image'] = base64.b64encode(x[3]).decode()
            res.append(res_data)
        return make_response(jsonify({"results": res}), 200)
    return make_response(jsonify({"results": 'Error'}), 500)
    
@app.route("/update", methods=["POST"])
def update():
    crud.update() #Create

@app.route("/delete", methods=["DELETE"])
def delete():
    crud.delete() #Create

if __name__ == '__main__':
    app.run(debug = True)