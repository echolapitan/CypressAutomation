describe('Should be able to adopt dog when 2 adults and 2 children', ()=>{

    it("2 adult, 2 children, dog: YES #ofDog: 1", () => {

        //This is the created familyID scenario4: 82f14206-9d75-4660-b32a-6ea93757a59a //bug
        cy.request('https://join.reckon.com/family/82f14206-9d75-4660-b32a-6ea93757a59a/eligibility').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('allowedDog', 'Y')
            expect(res.body).has.property('numberOfDogs', 1)

        })
    })  
})