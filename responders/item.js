var meta = {source: 'responders/item.js'};

var Responder = function Responder (api) {

	this.prototype = {
		route: '/item',
		name: 'item',
		plural: 'items',
		allow: { get: true, post: true, put: true, delete: true },
		fields: {
			fName: { 
				title: 'Name', type: 'alpha', validation: api.validation.alpha, 
				editable: false, viewable: true, required: true
			},
			fDesc: { 
				title: 'Description', type: 'alpha', validation: api.validation.alpha, 
				editable: true, viewable: true, required: true 
			},
			fNotes: {
				title: 'Notes', type: 'alpha', validation: api.validation.alpha,
				editable: true, viewable: true, required: false
			}			
		},
		actions: {
			httpGet: function () { api.log('GET: Item Responder') },
			httpPost: function () { api.log('POST: Item Responder') },
			httpPut: function () { api.log('PUT: Item Responder') },
			httpDelete: function () { api.log('DELETE: Item Responder') }
		},
		owner: { level: 'all', fields: ['fName','fDesc','fNotes'] },
		group: { level: 'edit', fields: ['fName','fDesc'] },
		world: { level: 'read', fields: ['fName','fDesc'] }
	}
};

module.exports = function (api) {
	var responder = new Responder(api);
	return responder.prototype;
};