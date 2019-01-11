from apps.api import api
import json
import graphene


class Query(graphene.ObjectType):
  hello = graphene.String(name=graphene.String(default_value="World"))

  def resolve_hello(self, info, name):
    return 'Hello ' + name

@api.route('test1')
def testFunc():

	schema = graphene.Schema(query=Query)
	result = schema.execute('{hello(name: "zhengxinglun")}')
	print(result.data['hello'])

	return json.dumps({'data': 1, 'status': 2})