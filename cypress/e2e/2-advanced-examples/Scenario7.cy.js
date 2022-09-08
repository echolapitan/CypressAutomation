describe('Should not be able to adopt dog when One parent has a yellow as a favourite colour', ()=>{

    it("Both parent yellow has a favourite colour, dog: Y #ofDog: x", () => {

        //This is the created familyID scenario7: 07a31184-fb3f-4365-a6ef-9c04879504aa (pattern on scenario5) not qualified on rule1, positive test on rule 2 parent 1: yellow parent2: yelow
        // but the API response is following the rule 1 logic, even I have followed Rule 2 scenario
        cy.request('https://join.reckon.com/family/07a31184-fb3f-4365-a6ef-9c04879504aa/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'N')
            expect(res.body).has.property('numberOfDogs', 0)

        })
    })  
})