import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.get('store').findAll('post');
	},

	setupController(controller, model){
		Ember.set(controller, 'posts', model);
	}

});
