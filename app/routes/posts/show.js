import Ember from 'ember';

export default Ember.Route.extend({
	model (params) {
		return this.get('store').findRecord('post', params.id);
	},

	setupController(controller, model){
		Ember.set(controller, 'post', model);
	}
});



