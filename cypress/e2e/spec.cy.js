describe("Login test - valid credentials", () => {
    it("Passes", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get(".text-end .btn-outline-success").click();
        cy.get("#loginEmail").type("chrisberg@stud.noroff.no");
        cy.get("#loginPassword").type("passwordpassword");
        cy.get(".modal-footer .btn-success").contains("Login").click();
    });
});

describe("Logout Test", () => {
    it("Passes", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get(".text-end .btn-outline-success").click();
        cy.get("#loginEmail").type("chrisberg@stud.noroff.no");
        cy.get("#loginPassword").type("passwordpassword");
        cy.get(".modal-footer .btn-success").contains("Login").click();
        cy.get(".text-end .btn-outline-warning").contains("Logout").click();
    });
});

describe("Login test - Invalid credentials", () => {
    it("Fails", () => {
        cy.on("window:alert", (alertText) => {
            expect(alertText).to.equal(
                "Either your username was not found or your password is incorrect"
            );
        });
        cy.visit("http://127.0.0.1:5500/");
        cy.get(".text-end .btn-outline-success").click();
        cy.get("#loginEmail").type("invalidemail@stud.noroff.no");
        cy.get("#loginPassword").type("invalidPassword");
        cy.get(".modal-footer .btn-success").contains("Login").click();
    });
});