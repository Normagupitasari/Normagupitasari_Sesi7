const assert = require("assert");

describe("Feature Reqres", function () {
    it("GET Single User", async function () {
        const response = await fetch("https://reqres.in/api/users/2");
        const data = await response.json();

        //console.log(data);
        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.data.id, 2);
        assert.strictEqual(data.data.first_name, "Janet");
    })
   

    it("POST Create", async function () {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "shinta",
                job: "leader",
            }),
        });
        const data = await response.json();
        //console.log(data);
        // expect(response.status).to.equal(201);
        // expect(data.name).to.include("shinta");
        // expect(data.job).to.include("leader");
        assert.strictEqual(response.status, 201);
        assert.strictEqual(data.name, "shinta");
    })

    it("PUT Update User", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PUT",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident",
            }),
        });
        const data = await response.json();

        //console.log(data);
        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.name, "morpheus");
        assert.strictEqual(data.job, "zion resident");
    })

    it("PATCH Update User", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident",
            }),
        });
        const data = await response.json();

        //console.log(data);
        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.name, "morpheus");
        assert.strictEqual(data.job, "zion resident");
    })



    it("DELETE User", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
            },
        });

        //console.log(response);
        assert.strictEqual(response.status, 204);
    })
    

})