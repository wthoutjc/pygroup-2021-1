from flask import Flask, request, jsonify, make_response
import os
from flask_cors import CORS
import base64

#Lógica CRUD
from CRUD.crud import CRUD

app = Flask(__name__)

#Config del entorno
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
CORS(app)

crud = CRUD() #Aca inicializamos nuestro CRUD

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
    return make_response(jsonify({"results": data}), 500)

@app.route("/read-specific/<id>", methods=["GET"])
def read_specific(id):
    data = crud.read_specific(id)
    if data:
        res = []
        res_data = {}
        res_data['id'] = data[0]
        res_data['name'] = data[1]
        res_data['link'] = data[2]
        res_data['image'] = base64.b64encode(data[3]).decode()
        res.append(res_data)
        return make_response(jsonify({"results": res}), 200)
    print(data)
    return make_response(jsonify({"results": data}), 500)

@app.route("/update/<id>", methods=["POST"])
def update(id):
    if request.method == "POST":
        if request.files: #En request.files van las imagenes
            image = request.files['file']
        if request.form: #En request.form van los strings
            name = request.form['name']
            link = request.form['link']
        data = crud.update(id, name, link, image) #Create
        print(data)
        if data:
            return make_response(jsonify({"results": 'Error'}), 500)
        return make_response(jsonify({"results": 'ok'}), 200)
    
@app.route("/delete/<id>", methods=["DELETE"])
def delete(id):
    data = crud.delete(id) #Create
    print(data)
    if data:
        return make_response(jsonify({"results": data}), 500)
    return make_response(jsonify({"results": data}), 200)

if __name__ == '__main__':
    app.run(debug = True)