const supertest = require('supertest');

const app = require('../app');

var key = "";

describe('Test Sistema de Autenticación', ()=>{
  // Test Case = > 50 %
  it('Debería obtener un login correcto', (done)=>{
    supertest(app).post('/login')
    .send({'email':'EmailTest@mail.com', 'password':'password2021'})
    .expect(200)
    .end(function(err, res){
      key = res.body.obj;
      done();
    });
  });
});

// Sentence
describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería obtener la lista de Usuarios', (done)=>{
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
  it('Debería NO obtener la lista de Usuarios', (done)=>{
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
  it('Debería obtener un usuario', (done)=>{
    supertest(app).get('/users/?id=61a9b31132a70dac7c4ba64a')
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
  it('Debería NO obtener un usuario', (done)=>{
    supertest(app).get('/users/show/61a9b31132a70dac7c4ba64a')
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
  it('Debería crear un usuario', (done)=>{
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
  it('Debería NO crear un usuario', (done)=>{
    supertest(app).post('/users')
    .set( 'Authorization', ` `)
    .end(function(err, res){
      if(err){
        done(err);
      } else {
        expect(res.statusCode).toEqual(401);
        done();
      }
    });
  });
});

describe('Test Sistema de Usuarios', ()=>{
  // Test Case = > 50 %
  it('Debería reemplazar un usuario', (done)=>{
    supertest(app).put('/users/61a9b31132a70dac7c4ba64a')
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
  it('Debería NO reemplazar un usuario', (done)=>{
    supertest(app).put('/users/show/61a9b31132a70dac7c4ba64a')
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
  it('Debería editar un usuario', (done)=>{
    supertest(app).patch('/users/61a9b31132a70dac7c4ba64a')
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
  it('Debería NO editar un usuario', (done)=>{
    supertest(app).patch('/users/show/61a9b31132a70dac7c4ba64a')
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
  it('Debería eliminar un usuario', (done)=>{
    supertest(app).delete('/users/61a9b31132a70dac7c4ba64a')
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
  it('Debería NO eliminar un usuario', (done)=>{
    supertest(app).delete('/users/show/61a9b31132a70dac7c4ba64a')
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
