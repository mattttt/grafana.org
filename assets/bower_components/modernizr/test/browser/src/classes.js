describe("classes",function(){var e,t;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["classes","cleanup"],function(i,r){e=i,t=r,n()})}),it("is an array",function(){expect(e).to.be.an("array")}),after(function(){t()})});