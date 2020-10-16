const generatedId = require("../../src/utils/generateUUID");

// Se é possível gerar um uunid id único

// Se está vindo um id

// Se esse id é uma string

//  Se o tamanho da string é o que eu espero, 36 caracteres


describe("generateUUID", () => {
    it("se é possível gerar um uunid único", () => {
        const id = generatedId();

        expect(id).toBeDefined();
        expect(typeof id).toBe("string");
        expect(id).toHaveLength(36);
    });
});