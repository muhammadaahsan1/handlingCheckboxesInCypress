describe('test Suite: testing checkboxes of d/f types', ()=>{



    //Documentation: 

    it('test: checkboxes', ()=>{

        cy.visit('https://codenboxautomationlab.com/practice')
        //checks all the checkboxes having type as checkbox
        cy.get('[type="checkbox"]').check()

        
        //uncheck all
        cy.get('[type="checkbox"]').uncheck()
        //checks the very first checkbox on the page having type as checkbox
        cy.get('[type="checkbox"]').first().check()
        //click multiple checkboxes
        cy.get('[type="checkbox"]').click({multiple:true})

        //uncheck the very last checkbox on page having type as checkbox
        cy.get('[type="checkbox"]').last().uncheck()
        
    })
})