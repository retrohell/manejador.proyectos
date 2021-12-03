const supertest = require('supertest');

const app = require('../app');

var key = "";

// Sentence
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería obtener la lista de records de usuario', (done)=>{
    supertest(app).get('/records/')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener la lista de records de usuario', (done)=>{
    supertest(app).get('/records/show')
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

describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería obtener una records de usuario', (done)=>{
    supertest(app).get('/records/61a851bf53f24c830eef81a6')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener una records de usuario', (done)=>{
    supertest(app).get('/records/show/61a851bf53f24c830eef81a6')
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


describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería crear una records de usuario', (done)=>{
    supertest(app).post('/records')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO crear una records de usuario', (done)=>{
    supertest(app).post('/records')
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

describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería reemplazar una records de usuario', (done)=>{
    supertest(app).put('/records/61a851bf53f24c830eef81a6')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO reemplazar una records de usuario', (done)=>{
    supertest(app).put('/records/show/61a851bf53f24c830eef81a6')
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

describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería editar una records de usuario', (done)=>{
    supertest(app).put('/records/61a851bf53f24c830eef81a6')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO editar una records de usuario', (done)=>{
    supertest(app).put('/records/show/61a851bf53f24c830eef81a6')
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

describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería eliminar una records de usuario', (done)=>{
    supertest(app).put('/records/61a851bf53f24c830eef81a6')
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
describe('Test Sistema de records', ()=>{
  // Test Case = > 50 %
  it('Debería NO eliminar una records de usuario', (done)=>{
    supertest(app).put('/records/show/61a851bf53f24c830eef81a6')
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
