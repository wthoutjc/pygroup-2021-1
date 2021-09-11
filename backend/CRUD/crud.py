import mysql.connector

from settings import SETTINGS

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
        self.ncursor.execute("READ ..")

    def read(self):
        self.ncursor.execute("READ ..")

    def update(self):
        self.ncursor.execute("UPDATE ..")

    def delete(self):
        self.ncursor.execute("DELETE ..")

crud = CRUD()
