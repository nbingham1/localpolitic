#!/usr/bin/python

import os
import cgi
import json
import datetime

def convert(value):
	if isinstance(value, datetime.datetime):
		return str(value)

results = {
	'type': 'election',
	'level': 'federal',
	'date': datetime.datetime.now()
}

print("Content-type: text/json\r\n")
print(json.dumps(results, default=convert))
