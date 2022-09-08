describe('Negative Test not following any scenario for rule 1 & 2', ()=>{

    it("0 Adult, 0 Child dog: x #ofDog: x", () => { //family ID only

        //This is the created familyID scenario10: 481d2a95-01d0-40e6-b864-32e428641233
        cy.request('https://join.reckon.com/family/481d2a95-01d0-40e6-b864-32e428641233/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Unknown')
            expect(res.body).has.property('numberOfDogs', -1)

        })
    })  
})