#!/usr/bin/python

from lib.pyhtml.html import *
import os
import cgi

print(Document() << [
	Html() << [
		Head() << [
			Meta(Charset="utf-8"),
			Meta(Name="author", Content="Ned Bingham"),
			Link(Rel="stylesheet", Type="text/css", Href="css/app.css"),
			Link(Rel="stylesheet", Type="text/css", Href="css/header.css"),
			Link(Rel="stylesheet", Type="text/css", Href="css/nav.css"),
		],
		Body() << [
			Div(Id='app'),
			Script(Src="lib/react/react.js"),
			Script(Src="lib/react/react-dom.js"),
			Script(Src="lib/axios/axios.js", SourceMappingURL="lib/axios/axios.map"),
			Script(Src="js/app.js", Type="module"),
		],
	]
])

