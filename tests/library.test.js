const axios = require('axios');

const requestBody = {
    userName: "Jest Testing",
    bookTitle: "Testing from Jest",
    allottedDate: "2024-02-29T12:00:00.000Z",
    hasReturned: false
};

describe("LibraryTest", () => {

    it("should return all records", async () => {
        const response = await axios.get('http://localhost:3000/');
        expect(response.status).toBe(200);
    });

    it("should add a new record", async () => {
        const response = await axios.post('http://localhost:3000/', requestBody);
        console.log(response);
        expect(response.status).toBe(201);
        expect(response.data.userName).toBe("Jest Testing");
        expect(response.data.hasReturned).toBe(false); // default value
    });

    it("should delete a record", async () => {
        const id = "65e4c03dc63add9ba0e00d7a";
        const deleteResponse = await axios.delete(`http://localhost:3000/${id}`);
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.data).toBe(`user with id ${id} deleted from the database`);
    });

    it("should update a record", async () => {
        const id = "65dfb12bb09f47a29a7d100f";
        const updateResponse = await axios.patch(`http://localhost:3000/${id}`, {
            userName: 'Updated from Jest',
            bookTitle: 'Updated from Jest',
            allottedDate: 'Updated from Jest',
            hasReturned: true});
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.data.userName).toBe("Updated from Jest");
    });

    it("should return a record", async () => {
        const getResponse = await axios.get(`http://localhost:3000/65e4b3c5ad6454f6fc3f3a8c`);
        expect(getResponse.status).toBe(200);
        expect(getResponse.data.userName).toBe("hasChangedNow");
    });
});