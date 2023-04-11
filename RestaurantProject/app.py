from flask import Flask,render_template,request,redirect,session,flash,jsonify
import smtplib
import sqlite3

app=Flask(__name__)

def db_query(query, args=(), one=False):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute(query, args)
    rv = cur.fetchall()
    conn.commit()
    cur.close()
    return (rv[0] if rv else None) if one else rv
db_query('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, username TEXT UNIQUE, password TEXT)')

#route() decorators
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/About.html')
def about():
    return render_template('About.html')

@app.route('/Menu.html')
def menu():
    return render_template('Menu.html')

@app.route('/Contact.html')
def contact():
    return render_template('Contact.html')

@app.route('/Mail.html')
def mail():
    return render_template('Mail.html')

@app.route('/Login.html', methods=['GET'])
def login_page():
    return render_template('Login.html')

@app.route('/check-login', methods=['POST'])
def check_login():

    data = request.json
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    query = "SELECT * FROM users WHERE username = ? AND password = ?"
    c.execute(query, (username, password))
    user = c.fetchone()

    if user:
        session['user_id'] = user[0]
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})


@app.route('/sign-up.html', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']

        conn = sqlite3.connect('database.db')
        c = conn.cursor()

        c.execute('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', (email, username, password))
        conn.commit()

        conn.close()

        return 'Signup successful!'

    return render_template('sign-up.html')




#!================<Menu Items>=======================
@app.route('/KSRB.html')
def menu_item_KSRB():
    return render_template('Menu_Items/KSRB.html')

@app.route('/TMRB.html')
def menu_item_TMRB():
    return render_template('Menu_Items/TMRB.html')

@app.route('/BEV.html')
def menu_item_BEV():
    return render_template('Menu_Items/BEV.html')

@app.route('/Side_Coleslaw.html')
def menu_item_Side_CSL():
    return render_template('Menu_Items/Side_Coleslaw.html')

@app.route('/Side_Cornsalad.html')
def menu_item_Side_CSD():
    return render_template('Menu_Items/Side_Cornsalad.html')

@app.route('/Side_Edamame.html')
def menu_item_Side_EDM():
    return render_template('Menu_Items/Side_Edamame.html')

#!===================================================

#My Cart Page
@app.route('/MyCart.html')
def MyCart():
    return render_template('MyCart.html')

if __name__=='__main__':
    app.run(debug=True)