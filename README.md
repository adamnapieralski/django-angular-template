# django-angular-template

## Requirements
- Python 3.x
- Angular 9

## Install
Make sure you have _npm_ installed.
Afterwards, install all dependencies with
```
npm install
```

## Build
Before running django server, Angular side of the project needs to be built and output files exported to _static_ server's directory.
Run `ng build --prod --output-hashing none` to do it once or add `--watch` flag to have it continously built after file changes.

## Run
Run django server with `python manage.py runserver` in django directory. Open application in browser at [127.0.0.1](127.0.0.1).
