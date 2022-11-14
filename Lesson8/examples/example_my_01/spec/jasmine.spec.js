describe('Check some values', ()=>{
    it('test 1',()=>{
        let x = 10;
        expect(x).toBe(10);
    });


    it('test 2',()=>{
        let x = 19;
        expect(x).toBe(19);
    });

})

describe(' Доп функции', ()=>{
    it('test 3 Compare objects',()=>{

        let user1={
            name: 'Ivan',
            age: 20
        }

        let user2={
            name: 'Ivan',
            age: 20
        }

        expect(user1).toEqual(user2);
    });


})