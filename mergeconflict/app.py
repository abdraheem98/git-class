import flask_cors
import os
import random
import string
import json
from flask import Flask, jsonify, request
app = Flask(__name__)
flask_cors.CORS(app)
@app.route('/api/hello', methods=['GET'])
def products():
    if request.method == 'GET':
        return jsonify({'message': 'Hello World'})
if __name__ == '__main__':    app.run(debug=True, host='<IP_ADDRESS>', port=int(os.environ.get('PORT', 8080)))  

def generate_random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(length))
def generate_random_number(length):
    digits = string.digits
    return ''.join(random.choice(digits) for i in range(length))
def generate_random_email():
    domains = ['example.com', 'test.com', 'sample.com']
    return generate_random_string(10) + '@' + random.choice(domains)
def random_id():
    return generate_random_string(5) + generate_random_number(3)
def function1():
    return "This is function 1"

