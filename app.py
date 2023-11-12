from flask import Flask, render_template, url_for, request, redirect
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField ,SubmitField
from wtforms.validators import DataRequired
from flask_restful import Api, Resource

class PostForm(FlaskForm):
    index = IntegerField('Enter the index', validators=[DataRequired()])
    addable = StringField('Enter something', validators=[DataRequired()])
    submit = SubmitField('add to spesific location')

app = Flask(__name__)
app.config['SECRET_KEY'] = "this is a key dude"
api = Api(app)

mylist = []

class This_is_delete_methode(Resource):
    def delete(self, id):
        
        if id >= len(mylist):
            return "Index out of range", 400
        else:
            del mylist[id]
            return 
        
class This_is_patch_methode(Resource):
    def patch(self, id, newval):
        id = int(id)  # Convert id to integer
        if id >= len(mylist):
            return 'Index out of range', 400
        else:
            mylist[id] = newval
            return

class This_is_put_methode(Resource):
    def put(self, addable):
        if addable in mylist:
            return "Resource already exists", 409
        mylist.append(addable)
        return "Array updated", 201
    
class This_is_get_methode(Resource):
    def get(self):
        if not mylist:
            return '', 204  # Return 204 No Content if the list is empty
        return mylist, 200

api.add_resource(This_is_delete_methode, "/deletelement/<int:id>")
api.add_resource(This_is_put_methode, "/putelement/<string:addable>")
api.add_resource(This_is_patch_methode, "/patchelement/<int:id>/<string:newval>")
api.add_resource(This_is_get_methode, "/mylist")
 

@app.route("/")
def home():
    form = PostForm()
    return render_template("index.html", entity = mylist, addr = url_for('home', _external = True), form = form)


@app.route("/acceptpost", methods=['POST'])
def posthandler():
    form = PostForm(request.form)
    if form.validate_on_submit():
        a = form.index.data
        b = form.addable.data
        if a >= len(mylist):
            return
        else:
            mylist.insert(a, b)
        return redirect(url_for('home'))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)
