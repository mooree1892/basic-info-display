import DS from 'ember-data';

export default DS.Model.extend({
	postId: DS.attr('number'),
	name: DS.attr('string'),
	body: DS.attr('number')
});
