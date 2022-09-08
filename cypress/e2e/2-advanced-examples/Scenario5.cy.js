describe('Should not be able to adopt dog when 2 adults and 3 children', ()=>{

    it("2 adult, 3 children, dog: No #ofDog: 0", () => {

        //This is the created familyID scenario5: b69710f6-5be5-4b58-9abf-f6c284eeaa33
        cy.request('https://join.reckon.com/family/b69710f6-5be5-4b58-9abf-f6c284eeaa33/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'N')
            expect(res.body).has.property('numberOfDogs', 0)

        })
    })  
})