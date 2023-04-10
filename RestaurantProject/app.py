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
#!================<Menu Items>======================={
@app.route('/KSRB.html')
def menu_item_KSRB():
    return render_template('Menu_Items/KSRB.html')
@app.route('/TMRB.html')
def menu_item_TMRB():
    return render_template('Menu_Items/TMRB.html')

#!===================================================}

if __name__=='__main__':
    app.run(debug=True)