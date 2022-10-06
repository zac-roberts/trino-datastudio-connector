function test_trino() {

  var url="";
  var user="";
  var password="";
  var catalog="";
  var schema="";
  var object="";

  var query="select * from "+catalog+"."+schema+"."+object+" limit 10";

  var headers = generateTrinoAPIHeaders(user,password);
  //var headers = 

  const columns = getTrinoColumns(url,headers,catalog,schema,object);
  console.log(columns);

  const data = runTrinoQuery(url,headers,query);
  console.log(data);

}
