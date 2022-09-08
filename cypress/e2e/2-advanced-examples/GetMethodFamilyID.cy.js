describe('Should be able to GET API Response', ()=>{

    it("GET Method Response", () => {

        //This is the created familyID: ae6b69e1-d0f4-4fc0-bde6-2560a9316de9 //bug no response body only status code
        cy.request('https://join.reckon.com/family/ae6b69e1-d0f4-4fc0-bde6-2560a9316de9').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('name', 'Jerico')
        })
    })  
})