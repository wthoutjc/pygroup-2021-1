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

    def create(self, name, link, image):
        data = self.read() 
        if data:
            try:
                self.sql_create_query = 'INSERT INTO movies VALUES (%s, %s, %s, %s)'
                self.image = image.read()
                self.ncursor.execute(self.sql_create_query, (data[len(data) - 1][0] + 1, name, link, self.image))
                self.based.commit()
            except mysql.connector.Error as error:
                return error
        else:
            try:
                self.sql_create_query = 'INSERT INTO movies VALUES (%s, %s, %s, %s)'
                self.image = image.read()
                self.ncursor.execute(self.sql_create_query, (1, name, link, self.image))
                self.based.commit()
            except mysql.connector.Error as error:
                return error

    def read(self):
        try:
            self.ncursor.execute("SELECT * FROM movies")
            return self.ncursor.fetchall()
        except mysql.connector.Error as error:
                return error
                
    def read_specific(self):
        pass

    def update(self):
        self.ncursor.execute("SELECT * FROM movies")

    def delete(self):
        self.ncursor.execute("SELECT * FROM movies")