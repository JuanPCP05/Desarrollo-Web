from flask import Flask, render_template, request
from flaskext.mysql import MySQL

app= Flask(__name__)

app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_PORT']=3333
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']='12345'
app.config['MYSQL_DATABASE_DB']='taller8'

mysql = MySQL()
mysql.init_app(app)

@app.route('/', methods=['GET','POST'])
def index():
    cursor = mysql.get_db().cursor()
    cursor.execute("select * from ciudad")
    datos = cursor.fetchall()
    cursor.execute("select * from tipodocumento")
    documentos = cursor.fetchall()
    if request.method == 'POST':
        datosUsuario = request.form
        nombre = datosUsuario['nombre']
        apellido = datosUsuario['apellidos']
        tdocumento = datosUsuario['tdocumento']
        documento = datosUsuario['documento']
        lugarnacimiento = datosUsuario['nacimiento']
        fnacimiento = datosUsuario['fnacimiento']
        email = datosUsuario['email']
        telefono = datosUsuario['telefono']
        usuario = datosUsuario['Usuario']
        contraseña = datosUsuario['ccPassword']
        cursor.execute("INSERT INTO PERSONA (nombre, apellido, idtipodocumento, documento, idciudad, fechaNacimiento, email, telefono, usuario, contraseña ) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (nombre, apellido, tdocumento, documento, lugarnacimiento, fnacimiento, email, telefono, usuario, contraseña))
        cursor.connection.commit()
        cursor.close()
        return 'correcto'
    return render_template('index.html', ciudades = datos, documento = documentos)

if __name__ == '__main__':
    app.run(port = 5000, debug = True)