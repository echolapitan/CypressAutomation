describe('Negative Test not following any scenario for rule 1 & 2', ()=>{

    it("1 Adult, 0 Child dog: Unknown #ofDog: -1", () => {

        //This is the created familyID scenario8: 5ca8122b-9cc5-4d62-826e-b0367b51dcc4 //bug
        cy.request('https://join.reckon.com/family/5ca8122b-9cc5-4d62-826e-b0367b51dcc4/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Unknown')
            expect(res.body).has.property('numberOfDogs', -1)

        })
    })  
})