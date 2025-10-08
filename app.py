from flask import Flask, jsonify
import mysql.connector
import os

app = Flask(__name__)

db_config = {
    'host': os.getenv('mysql.railway.internal'),
    'user': os.getenv('root'),
    'password': os.getenv('wcFajlzWiODyrhAGPuoOcZeUpNczbxSx'),
    'database': os.getenv('railway'),
    'port': int(os.getenv(3306))
}

@app.route('/')
def home():
    return "EcoBoat Flask API connected to Railway MySQL!"

@app.route('/api/test')
def test_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("SELECT NOW();")
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        return jsonify({"status": "success", "time": result[0]})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
