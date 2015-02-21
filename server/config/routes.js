'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},

  {method: 'get', path: '/albums', config: require('../routes/albums/index')},
  {method: 'get', path: '/albums/new', config: require('../routes/albums/new')},
  {method: 'post', path: '/albums', config: require('../routes/albums/create')},
  {method: 'get', path: '/albums/{albumId}', config: require('../routes/albums/show')},
  {method: 'get', path: '/albums/{albumId}/edit', config: require('../routes/albums/edit')},
  {method: 'post', path: '/albums/{albumId}', config: require('../routes/albums/update')},
  {method: 'post', path: '/albums/{albumId}/mark', config: require('../routes/albums/mark')},
  {method: 'post', path: '/albums/{albumId}/photos/{photoIndex}/delete', config: require('../routes/albums/remove-photo')},
  {method: 'post', path: '/albums/{albumId}/photos', config: require('../routes/albums/add-photo')},

  {method: 'get', path: '/register', config: require('../routes/users/new')},
  {method: 'post', path: '/users', config: require('../routes/users/create')},
  {method: 'get', path: '/login', config: require('../routes/users/login')},
  {method: 'post', path: '/users/authenticate', config: require('../routes/users/authenticate')},
  {method: 'post', path: '/logout', config: require('../routes/users/logout')}
];
