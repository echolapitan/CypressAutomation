describe('Should be able to GET API Response', ()=>{

    it("GET Method Response", () => {

        //This is the created ParentID: d0318e8f-d5ea-44f2-b517-a502141ce14 //bug no response body only status code
        cy.request('https://join.reckon.com/parent/d0318e8f-d5ea-44f2-b517-a502141ce14').then((res) =>{

            expect(res.status).equal(200)
            expect(res.body).has.property('FavouriteColour', 'Yellow')
        })
    })  
})