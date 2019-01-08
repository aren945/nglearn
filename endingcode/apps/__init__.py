import os, sys
from flask import Flask, request

root_path = os.path.join(os.path.dirname(__file__), "../")

print(__file__)

if __name__ == '__main__':
  print(root_path)

app = Flask(__name__)

app.config.from_object('config')

@app.route('/test')
def testFunc():
  return '<h1>Hello Wrold</h1>'

from apps.api import api
app.register_blueprint(api)
