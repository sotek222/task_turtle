import sqlite3
import random
from db import db
from random import randint

class PostsModel(db.Model):

    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    client = db.Column(db.String(40), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    location = db.Column(db.String(180), nullable=False)
    date = db.Column(db.String(40), nullable=False)

    def __init__(self, client, title, description, date):
        self.client = client
        self.title = title
        self.description = description
        self.date = date

    def json(self):
        return {
        'client': self.client,
        'title': self.title,
        'description': self.description,
        'date': self.date,
         }


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()