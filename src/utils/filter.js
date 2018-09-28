import moment from 'moment';
import Vue from 'vue';

Vue.filter('date-format', value => moment(value).format('YYYY-MM-DD'));

Vue.filter('time-format', value => moment(value).format('YYYY-MM-DD hh:mm:ss'));
