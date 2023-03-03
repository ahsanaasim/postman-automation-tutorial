
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response time is less than 3000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.test("The email is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.user.email).to.eql("jo@email.com");
});

pm.test("AccessToken Exists", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.accessToken).to.not.eql(undefined);
});


var schema = {
};

pm.test('Schema is valid', function () {
    var jsonData = pm.response.json();
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});
