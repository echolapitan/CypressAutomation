describe('Should be able to adopt two dogs when 2 adults and 1 child', ()=>{

    it("2 adults, 1 child, dog: YES #ofDog: 2", () => {

        //This is the created familyID scenario2: b427a89d-f70e-445c-8a5a-3133ccff3b17
        cy.request('https://join.reckon.com/family/b427a89d-f70e-445c-8a5a-3133ccff3b17/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Y')
            expect(res.body).has.property('numberOfDogs', 2)

        })
    })  

})