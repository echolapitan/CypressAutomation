describe('Should not be able to adopt dog when One parent has a yellow as a favourite colour', ()=>{

    it("One parent only has a favourite colour, dog: No #ofDog: 0", () => {

        //This is the created familyID scenario6: ed3a2b6f-0131-477e-95f7-d0080c47d6fa (pattern on scenario2) qualified on rule1, negative test on rule 2 parent 1: yellow parent2: black
        // but the API response is following the rule 1 logic, even I have followed Rule 2 scenario
        cy.request('https://join.reckon.com/family/ed3a2b6f-0131-477e-95f7-d0080c47d6fa/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'N')
            expect(res.body).has.property('numberOfDogs', 0)

        })
    })  
})