var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('API', function() {
  let server = "http://localhost:3000"
      it('/GET', function(done) {
        chai.request(server)
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            res.text.should.be.eql('Hello World');
            done();
          });
      });

      it('/GET querystring', function(done) {
        let queryStr = "LoremIpsum"
        chai.request(server)
          .get('/querystring?id='+queryStr)
          .end(function(err, res){
            res.should.have.status(200);
            res.text.should.be.eql(queryStr);
            done();
          });
      });

      it('/POST', function(done) {
        chai.request(server)
          .post('/')
          .set('content-type', 'application/json')
          .send({foo: 'bar'})
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });

      it('/POST signin', function(done) {
        chai.request(server)
          .post('/signin')
          .set('content-type', 'application/json')
          .send({username: 'username', password: 'password'})
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });

    });
