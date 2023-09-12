process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/main';

chai.use(chaiHttp);
describe('api-test', () => {
    describe('/auth-api (register)', () => {
        it('it show return message ==> ', async (done) => {
            // let res = await chai.request(server)
            //     .post('/api/signup/register')
            //     .send({
            //         name: "",
            //         email: "",
            //     });

            console.log("result :: ")
        })
    })
})