from flask import Flask, render_template, Response
from flask_wtf import FlaskForm
from flask_restful import Api, Resource


app = Flask(__name__)
api = Api(app)

mylist = []

class This_is_delete_methode(Resource):
    def delete(self, id):
        id = int(id)  # Convert id to integer
        if id >= len(mylist):
            return "Index out of range", 400
        else:
            del mylist[id]
            return
        
class This_is_patch_methode(Resource):
    def patch(self, id, newval):
        id = int(id)  # Convert id to integer
        if id >= len(mylist):
            return '', 401
        else:
            mylist[id] = newval
            return

class This_is_put_methode(Resource):
    def put(self, addable):
        mylist.append(addable)
        return "array updated", 201

api.add_resource(This_is_delete_methode, "/deletelement/<int:id>")
api.add_resource(This_is_put_methode, "/putelement/<string:addable>")
api.add_resource(This_is_patch_methode, "/patchelement/<int:id>/<string:newval>")



@app.route("/")
def home():

    return render_template("index.html", entity = mylist)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)
