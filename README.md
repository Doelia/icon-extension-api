# icon-extension-api

API to get icon file from a filename.

## Quickstart
```
npm install
npm start
```
Change port with `--PORT` argument or set `PORT` environment variable

## Usage 

URL format :
```
http://localhost:8084/icon/[png|svg]/[filename]
```

### Example
Get **CSV** icon of **myfile.zip** :
```
http://localhost:8084/icon/svg/myfile.zip
```

Result 

![zip icon](https://raw.githubusercontent.com/Doelia/icon-extension-api/master/icons/png/027-zip.png)

