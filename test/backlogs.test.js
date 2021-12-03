const supertest = require('supertest');

const app = require('../app');

var key = "";

// Sentence
describe('Test Sistema de Autenticación', ()=>{
  // Test Case = > 50 %
  it('Debería obtener un login correcto', (done)=>{
    supertest(app).post('/login')
    .send({'email':'emailTest@mail.com', 'password':'password2021'})
    .expect(200)
    .end(function(err, res){
      key = res.body.obj;
      done();
    });
  });
});

// Sentence
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería obtener la lista de backlogs de usuario', (done)=>{
    supertest(app).get('/backlogs/')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener la lista de backlogs de usuario', (done)=>{
    supertest(app).get('/backlogs/show')
    .set( 'Authorization', `${key}`)
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

describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería obtener una backlogs de usuario', (done)=>{
    supertest(app).get('/backlogs/61a8815c385b5e1356c96c37')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO obtener una backlogs de usuario', (done)=>{
    supertest(app).get('/backlogs/show/61a8815c385b5e1356c96c37')
    .set( 'Authorization', `${key}`)
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


describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería crear una backlogs de usuario', (done)=>{
    supertest(app).post('/backlogs')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO crear una backlogs de usuario', (done)=>{
    supertest(app).post('/backlogs/')
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

describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería reemplazar una backlogs de usuario', (done)=>{
    supertest(app).put('/backlogs/61a8815c385b5e1356c96c37')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO reemplazar una backlogs de usuario', (done)=>{
    supertest(app).put('/backlogs/show/61a8815c385b5e1356c96c37')
    .set( 'Authorization', `Bearer ${key}`)
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

describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería editar una backlogs de usuario', (done)=>{
    supertest(app).patch('/backlogs/61a8815c385b5e1356c96c37')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO editar una backlogs de usuario', (done)=>{
    supertest(app).patch('/backlogs/show/61a8815c385b5e1356c96c37')
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

describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería eliminar una backlogs de usuario', (done)=>{
    supertest(app).delete('/backlogs/61a8815c385b5e1356c96c37')
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
describe('Test Sistema de backlogs', ()=>{
  // Test Case = > 50 %
  it('Debería NO eliminar una backlogs de usuario', (done)=>{
    supertest(app).delete('/backlogs/show/61a8815c385b5e1356c96c37')
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
