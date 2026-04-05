from flask import Flask, render_template, redirect, request,url_for

app = Flask(__name__)

@app.route('/')
def homepage():

    return render_template("homepage.html")

@app.route("/resume",methods = ["GET","POST"])
def resume():
        if request.method == "POST":
            exp = []
            expdesc = []

            proj = []
            projdesc = []
            cert = []
            certdesc = []

            for i in range(1,5):
                if request.form.get(f"exp{i}"):
                    exp.append(request.form.get(f"exp{i}"))
                if request.form.get(f"expdesc{i}"):
                    expdesc.append(request.form.get(f"expdesc{i}"))
                if request.form.get(f"proj{i}"):
                    proj.append(request.form.get(f"proj{i}"))
                if request.form.get(f"projdesc{i}"):
                    projdesc.append(request.form.get(f"projdesc{i}"))

            for i in range(1,7):
                if request.form.get(f"cert{i}"):
                    cert.append(request.form.get(f"cert{i}"))
                if request.form.get(f"certdesc{i}"):
                    certdesc.append(request.form.get(f"certdesc{i}"))
            # photo = request.files.get("photo")
            # if photo:
            #     photo_path = photo.filename
            #     photo.save("static/"+ photo_path)
            # else:
            #     photo_path = ""

            data = {
                # "photo" : photo_path,
                "name" : request.form.get("name"),
                "email" : request.form.get("email"),
                "number" : request.form.get("number"),
                "city" : request.form.get("city"),
                "linkedin" : request.form.get("linkedin"),
                "code" : request.form.get("codeplatform"),
                "state" : request.form.get("state"),
                "btech" : request.form.get("clgname"),
                "branch" : request.form.get("branch"),
                "grdyear" : int(request.form.get("grdyear")),
                "cgpa" : request.form.get("cgpa"),
                "lang": request.form.get("lang", "").split("\n"),
                "desc" : request.form.get("desc"),
                "progskills": request.form.get("progskills", "").split("\n"),
                "dbskills": request.form.get("dbskills", "").split("\n"),
                "tools": request.form.get("tools", "").split("\n"),
            }           

            return render_template("three_resume.html",data = data,exps = list(zip(exp,expdesc)), projs = list(zip(proj,projdesc)), certs = list(zip(cert,certdesc)))
            # if layout = "three":
            #     return render_template("three_resume.html",data = data,exps = list(zip(exp,expdesc)), projs = list(zip(proj,projdesc)), certs = list(zip(cert,certdesc)))
            # else:
            #     return render_template("one_resume.html",data = data,exps = list(zip(exp,expdesc)), projs = list(zip(proj,projdesc)), certs = list(zip(cert,certdesc)))
            
        return redirect(url_for("homepage"))

if __name__ == "__main__":
    app.run()
