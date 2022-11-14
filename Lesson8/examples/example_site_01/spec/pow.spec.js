const action = require('../pow');
describe('Возведение в степень',()=> {
    it('2^3',()=>{
        expect(action.pow(2,3)).toBe(8);
    });
    it('3^3',()=>{
        expect(action.pow(3,3)).toBe(27);
    })
    it('2^0',()=>{
        expect(action.pow(2,0)).toBe(1);
    })

});
describe('Факториал числа',()=> {
    it('3',()=>{
        expect(action.fact(3)).toBe(6);
    });
    it('5',()=>{
        expect(action.fact(5)).toBe(120);
    })
});