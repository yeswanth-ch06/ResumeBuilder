from flask import Flask, render_template, redirect, request,url_for

app = Flask(__name__)

@app.route('/')
def homepage():

    return render_template("homepage.html")

@app.route("/resume",methods = ["GET","POST"])
def resume():
        if request.method == "POST":
            photo = request.files.get("photo")
            if photo:
                photo_path = photo.filename
                photo.save("static/"+ photo_path)
            else:
                photo_path = ""
            data = {
                "photo" : photo_path,
                "name" : request.form.get("name"),
                "email" : request.form.get("email"),
                "number" : request.form.get("number"),
                "city" : request.form.get("city"),
                "state" : request.form.get("state"),
                "school" : request.form.get("schl"),
                "schlpass" : request.form.get("schlpass"),
                "schlmarks" : request.form.get("schlmarks"),
                "inter" : request.form.get("inter"),
                "stream" : request.form.get("stream"),
                "interpass" : request.form.get("interpass"),
                "intermarks" : request.form.get("intermarks"),
                "btech" : request.form.get("clgname"),
                "branch" : request.form.get("branch"),
                "grdyear" : request.form.get("grdyear"),
                "cgpa" : request.form.get("cgpa"),
                "techskills": request.form.get("techskills", "").split("\n"),
                "softskills": request.form.get("softskills", "").split("\n"),
                "lang": request.form.get("lang", "").split("\n"),
                "exp": request.form.get("exp", "").split("\n"),
                "intern": request.form.get("intern", "").split("\n"),
                "desc" : request.form.get("desc"),
            }
            return render_template("resume.html",data = data)
        return redirect(url_for("homepage"))

# if __name__ == "__main__":

#     app.run()
