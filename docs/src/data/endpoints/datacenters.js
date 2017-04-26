module.exports = {"name":"Datacenters","basePath":"/datacenters","description":"Datacenter endpoints provide a means of viewing <a href=\"#object-datacenter\"> datacenter objects</a>.\n","endpoints":[{"description":"Returns collection of datacenters.\n","endpoints":null,"methods":[{"description":"Returns list of <a href=\"#object-datacenter\">datacenters</a>.\n","examples":[{"name":"curl","value":"curl https://$api_root/$version/datacenters\n"},{"name":"python","value":"import datacenters\nTODO\n"}],"name":"GET"}],"path":"datacenters"},{"description":"Return a particular datacenter.\n","endpoints":null,"methods":[{"description":"Returns information about this <a href=\"#object-datacenter\"> datacenter</a>.\n","examples":[{"name":"curl","value":"curl https://$api_root/$version/datacenters/$datacenter_id\n"},{"name":"python","value":"import datacenters\nTODO\n"}],"name":"GET"}],"path":"datacenters/:id"}],"methods":null};