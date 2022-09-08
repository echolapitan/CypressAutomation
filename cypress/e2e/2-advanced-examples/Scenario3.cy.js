describe('Should not be able to adopt dog when 1 adult and 2 children', ()=>{

    it("1 adult, 2 children, dog: NO #ofDog: 0", () => {

        //This is the created familyID scenario3: 11655cb4-e369-4aa8-9c73-7a308b4b5636
        cy.request('https://join.reckon.com/family/11655cb4-e369-4aa8-9c73-7a308b4b5636/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'N')
            expect(res.body).has.property('numberOfDogs', 0)

        })
    })  
})