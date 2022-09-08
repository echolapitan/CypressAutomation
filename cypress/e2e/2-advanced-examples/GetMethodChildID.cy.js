describe('Should be able to GET API Response', ()=>{

    it("GET Method Response", () => {

        //This is the created ChildID: 58b54201-10b1-4a29-a971-1e9723743e9d //displaying child ID but as compared to expected result it should be failed sequence of child details is not the same
        cy.request('https://join.reckon.com/child/58b54201-10b1-4a29-a971-1e9723743e9d').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('id', '58b54201-10b1-4a29-a971-1e9723743e9d')
            expect(res.body).has.property('familyId', 'ae6b69e1-d0f4-4fc0-bde6-2560a9316de9')
            expect(res.body).has.property('firstName', 'Junior')
            expect(res.body).has.property('lastName', 'Lapitan')
            expect(res.body).has.property('favouriteToy', 'Rocking Horse')
        })
    })  
})