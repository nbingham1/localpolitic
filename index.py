#!/usr/bin/python

from lib.pyhtml.html import *
import os
import cgi

print(Document() << [
	Html() << [
		Head() << [
			Meta(Charset="utf-8"),
			Meta(Name="author", Content="Ned Bingham"),
		],
		Body() << [
			Main(Id='app'), 
			Script(Src="lib/react/react.js"),
			Script(Src="lib/react/react-dom.js"),
			Script(Src="js/app.js"),
		]
	]
])

