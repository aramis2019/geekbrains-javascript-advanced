describe('Соотвествие значений',()=>{
    it('Проверка переменной х на значение 10',()=>{
        let x = 10;
        expect(x).toBe(10);
    });
    it('Проверка переменной х на значение 20',()=>{
        let x = 20;
        expect(x).toBe(20);
    });
});

describe("Дополнительные функции",()=>{
    it("Сравнение объектов",()=>{
        let myTestFunc = ()=>{}
        let user1 = {
            name: "Иван",
            age: 25,
            go: myTestFunc
        };
        let user2 = {
            name: "Иван",
            age: 25,
            go: myTestFunc
        }
        expect(user1).toEqual(user2);
    });

    it("regExp",()=>{
        let test = 'Test aBCd jasmine';
        expect(test).toMatch(/abcd/i);

    });
    it("Arrays",()=>{
        let arr = ['black','white'];
        expect(arr).toContain('white');
    })

})
