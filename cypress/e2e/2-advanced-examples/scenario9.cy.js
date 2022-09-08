describe('Negative Test not following any scenario for rule 1 & 2', ()=>{

    it("0 Adult, 1 Child dog: Unknown #ofDog: -1", () => {

        //This is the created familyID scenario9: dff96e80-2b3c-4d88-a0c5-5257a89a1c68
        cy.request('https://join.reckon.com/family/dff96e80-2b3c-4d88-a0c5-5257a89a1c68/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Unknown')
            expect(res.body).has.property('numberOfDogs', -1)

        })
    })  
})