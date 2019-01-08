from apps.api import api
import json

@api.route('test1')
def testFunc():
	return json.dumps({'data': 1, 'status': 2})