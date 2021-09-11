import mysql.connector

from CRUD.settings import SETTINGS

class CRUD():
    def __init__(self):
        self.based = mysql.connector.connect(
            host=SETTINGS["host"],
            user=SETTINGS["user"],
            passwd=SETTINGS["passwd"],
            database=SETTINGS["database"]
        )
        self.ncursor = self.based.cursor()

    def create(self):
        self.ncursor.execute("SELECT * FROM movies")

    def read(self):
        self.ncursor.execute("SELECT * FROM movies")

    def update(self):
        self.ncursor.execute("SELECT * FROM movies")

    def delete(self):
        self.ncursor.execute("SELECT * FROM movies")