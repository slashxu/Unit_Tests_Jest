import React from 'react';
import renderer from 'react-test-renderer';

describe('Teste de soma', () => {
    function sum(a, b) {
       return a + b;
    }

    it('deve ser igual a 4',()=>{
       expect(sum(2,2)).toBe(4);
      })

    test('também deve ser igual a 4', () => {
        expect(sum(2,2)).toBe(4);
      }) 
});