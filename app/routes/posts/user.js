import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.get('store').query('post', { userId: params.id });
	},

	setupController(controller, model){
		Ember.set(controller, 'posts', model);
	}
});
