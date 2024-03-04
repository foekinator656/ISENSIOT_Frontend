import requests
URL = "http://192.168.198.9:8080/api/v1/auth/login"
BODY = {"email": "appeltaart@gmail.com", "password": "appeltaart"}


r = requests.get(url=URL, json=BODY)
data = r.json()


JWT = data["token"]
Headers = {"Authorization": "Bearer "+JWT}

URL = "http://192.168.198.9:8080/api/v1/batch/5"
r = requests.post(url=URL, json=BODY, headers=Headers)
data = r.json()

URL = "http://192.168.198.9:8080/api/v1/timerecording/"+str(data)+"/"
