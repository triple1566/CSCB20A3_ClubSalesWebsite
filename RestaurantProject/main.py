from flask import Flask, render_template, request
import sqlite3
app = Flask(__name__)
con = sqlite3.connect("tutorial.db")
cur = con.cursor()

create_db_query = "create table if not exists People(name text, age integer, email text)"
cur.execute(create_db_query)
# cur.execute("insert into People values ('John Doe',38,john@gmail.com)")
# results = cur.execute('select * from People')
# print(result)
# print([results for result in results])

@app.route('/add-a-value')
def add_a_value():
    return render_template('add-value.html')

@app.route('/get-a-value')
def get_a_value():
    return render_template('get-value.html')

@app.route('/add-value', methods=['POST'])
def add_value():
    name = request.form.get('name')
    age = int(request.form.get('age'))
    email = request.form.get('email')
    print(name, age, email)
    cur.execute(f"insert into People values ('{name}',{age},'{email}')")
    return render_template('get-value.html')

@app.route('/get-value', methods=['POST'])
def get_value():
    query_age = int(request.form.get('age'))
    print(query_age)
    results = cur.execute(f"select * from People where age > {query_age}")
    processed_results = [results for result in results]
    return render_template('show-result.html', results=str(processed_results))

if __name__ == "__main__":
    app.run()