describe('Should be able to adopt one dog when 1 adult and 1 child', ()=>{

    it("1 adult, 1 child, dog: YES #ofDog: 1", () => {

        //This is the created familyID scenario1: 568d036e-f9ae-43aa-a911-0d7d8da8b72a //bug
        cy.request('https://join.reckon.com/family/568d036e-f9ae-43aa-a911-0d7d8da8b72a/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Y')
            expect(res.body).has.property('numberOfDogs', 1)

        })
    })  
})