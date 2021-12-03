const supertest = require('supertest');

const app = require('../app');

var key = "";

// Sentence
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería obtener la lista de Usuarios de usuario', (done)=>{
    supertest(app).get('/users/')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener la lista de Usuarios de usuario', (done)=>{
    supertest(app).get('/users/show')
    .set( 'Authorization', ` ${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(500);
        done();
      }
    });
  });
});

describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería obtener una historia de usuario', (done)=>{
    supertest(app).get('/users/?id=61a8912201b82dfa3c3fe8c0')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener una historia de usuario', (done)=>{
    supertest(app).get('/users/show/61a8912201b82dfa3c3fe8c0')
    .set( 'Authorization', ` ${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(404);
        done();
      }
    });
  });
});


describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería crear una historia de usuario', (done)=>{
    supertest(app).post('/users')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO crear una historia de usuario', (done)=>{
    supertest(app).post('/users')
    .set( 'Authorization', ` `)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(500);
        done();
      }
    });
  });
});

describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería reemplazar una historia de usuario', (done)=>{
    supertest(app).put('/users/61a8912201b82dfa3c3fe8c0')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO reemplazar una historia de usuario', (done)=>{
    supertest(app).put('/users/show/61a8912201b82dfa3c3fe8c0')
    .set( 'Authorization', ` `)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(404);
        done();
      }
    });
  });
});

describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería editar una historia de usuario', (done)=>{
    supertest(app).put('/users/61a8912201b82dfa3c3fe8c0')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO editar una historia de usuario', (done)=>{
    supertest(app).put('/users/show/61a8912201b82dfa3c3fe8c0')
    .set( 'Authorization', ` `)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(404);
        done();
      }
    });
  });
});

describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería eliminar una historia de usuario', (done)=>{
    supertest(app).put('/users/61a8912201b82dfa3c3fe8c0')
    .set('Authorization', `${key}`)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(200);
        done();
      }
    });
  });
});
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería NO eliminar una historia de usuario', (done)=>{
    supertest(app).put('/users/show/61a8912201b82dfa3c3fe8c0')
    .set( 'Authorization', ` `)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(404);
        done();
      }
    });
  });
});
