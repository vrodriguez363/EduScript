describe('$', function () {
	it('exists', function () {
		expect($).toBeDefined();
	});

	describe('$.elem', function () {
		it('exists', function () {
			expect($.elem).toBeDefined();
		});
	});

	describe('$.ajax', function () {
		it('exists', function () {
			expect($.ajax).toBeDefined();
		});
	});

	describe('$.test', function () {
		it('exists', function () {
			expect($.test).toBeDefined();
		});
	});

	describe('$.extend', function () {
		it('exists', function () {
			expect($.extend).toBeDefined();
		});
	});
});