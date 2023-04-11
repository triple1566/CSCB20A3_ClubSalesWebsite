from flask import Flask,render_template,request,redirect
import smtplib

app=Flask(__name__)

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

@app.route('/Login.html')
def login():
    return render_template('Login.html')

@app.route('/sign-up.html')
def sign_up():
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

if __name__=='__main__':
    app.run(debug=True)