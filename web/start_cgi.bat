@echo off

echo Starting CGI server...
cd ..\web\output
start python PythonCGIServer.py
